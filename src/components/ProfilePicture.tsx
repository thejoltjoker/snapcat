import { User } from "../models/User";

type ProfilePicture = { user: User | null | undefined };

const ProfilePicture = ({ user }: ProfilePicture) => {
  return (
    <div className="max-w-32">
      <img
        src={
          `${import.meta.env.BASE_URL}img/${user?.profilePictureName}` ??
          "https://placekitten.com/400/400"
        }
        alt="Profile picture"
        className="rounded-full border-4 border-slate-900 outline outline-1 outline-slate-500"
      />
    </div>
  );
};

export default ProfilePicture;
