import axios from "axios";
import { useEffect, useState } from "react";
import EditProfileSection from "../components/EditProfileSection";
import ProfileMetaSlot from "../components/ProfileMetaSlot";
import ProfilePicture from "../components/ProfilePicture";
import ProfilePosts from "../components/ProfilePosts";
import { useUserContext } from "../contexts/UserContext";
import { formatNumber } from "../helpers/numbers";
import { Post } from "../models/Post";
import { PostsResponse } from "../models/PostsResponse";

const ProfilePage = () => {
  const { user } = useUserContext();
  const [posts, setPosts] = useState<Post[]>();
  const [editable, setEditable] = useState(false);

  const handleEditButton = () => {
    setEditable(!editable);
  };

  useEffect(() => {
    if (posts) return;
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostsResponse>(
          `${import.meta.env.BASE_URL}/api/posts.json`,
        );
        if (!ignore) {
          setPosts(
            response.data.result.filter(
              (post) => post.username == user?.username,
            ),
          );
        }
      } catch (error) {
        console.error("Error while fetching posts");
        throw error;
      }
    };
    fetchPosts();
    return () => {
      ignore = true;
    };
  });

  return (
    <div className="py-4">
      <div className="mb-6 mt-2 flex justify-center">
        <ProfilePicture user={user} />
      </div>
      <div className="mb-4 text-center text-xl">
        <h2 className="font-title font-bold">{user?.fullName}</h2>
        <h3 className="text-base text-slate-600">@{user?.username}</h3>
      </div>

      {!editable && (
        <>
          <div className="mb-4">
            <p className="whitespace-pre-line">{user?.bio}</p>
          </div>
          <div className="grid w-full grid-cols-3 gap-4 py-4">
            <ProfileMetaSlot
              number={posts?.length.toString() ?? "0"}
              title="posts"
            />

            <ProfileMetaSlot
              number={user ? formatNumber(user.followers) : "0"}
              title="followers"
            />
            <ProfileMetaSlot
              number={user ? formatNumber(user.following) : "0"}
              title="following"
            />
          </div>
        </>
      )}
      <EditProfileSection editable={editable} onClick={handleEditButton} />
      <ProfilePosts posts={posts} />
    </div>
  );
};

export default ProfilePage;
