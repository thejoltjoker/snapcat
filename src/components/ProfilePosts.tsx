import { randomString } from "../helpers/strings";
import { Post } from "../models/Post";

type ProfilePostsProps = {
  posts: Post[] | undefined;
};

const ProfilePosts = ({ posts }: ProfilePostsProps) => {
  return (
    <>
      {posts ? (
        <div className="grid grid-cols-3 gap-2">
          {posts
            ?.sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((post) => {
              return (
                <div key={post.postId}>
                  <img
                    src={`${import.meta.env.BASE_URL}img/${post.filename}`}
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {Array(9)
            .fill("")
            .map(() => {
              return (
                <div key={randomString()}>
                  <div className="aspect-square w-full animate-pulse bg-gray-200"></div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ProfilePosts;
