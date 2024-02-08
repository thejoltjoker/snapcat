import axios from "axios";
import { useEffect, useState } from "react";
import FeedPost from "../components/FeedPost";
import { Post } from "../models/Post";
import { PostsResponse } from "../models/PostsResponse";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    if (posts) return;
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostsResponse>("./api/posts.json");
        if (!ignore) {
          setPosts([
            ...response.data.result.sort((a, b) => (a.date > b.date ? -1 : 1)),
          ]);
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
    <>
      <h1 className="upp pb-8 pt-4 text-center font-title text-2xl font-bold underline decoration-pink-500 decoration-2 underline-offset-4">
        SnapCat
      </h1>
      <div className="flex flex-col gap-16">
        {posts &&
          posts.map((post) => <FeedPost key={post.postId} data={post} />)}
      </div>
    </>
  );
};

export default HomePage;
