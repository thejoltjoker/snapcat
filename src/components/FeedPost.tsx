import { formatDistanceToNow } from "date-fns";
import { Post } from "../models/Post";
import LikeButton from "./LikeButton";

type FeedPostProps = {
  data: Post;
};

const FeedPost = ({ data }: FeedPostProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-title text-xl font-bold">
        <span className="text-pink-500">@</span>
        {data.username}
      </h3>

      <img
        src={`${import.meta.env.BASE_URL}img/${data.filename}`}
        alt={`Photo by ${data.username}`}
        className="rounded-2xl"
      />

      <div className="mb-2 flex justify-between p-2 font-bold">
        <LikeButton />
        <p className="font-normal text-slate-500">
          <span className="font-bold text-indigo-400">{data.likes}</span> likes
        </p>
      </div>
      <p className="whitespace-pre-line">{data.caption}</p>
      <p className="mb-4 text-sm text-slate-500">
        {formatDistanceToNow(new Date(data.date))} ago
      </p>
    </div>
  );
};

export default FeedPost;
