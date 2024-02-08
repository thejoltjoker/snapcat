import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { UserActionType } from "../reducers/UserReducer";

type EditProfileSectionProps = { editable: boolean; onClick: () => void };

const EditProfileSection = ({ editable, onClick }: EditProfileSectionProps) => {
  const { user, dispatch } = useUserContext();
  const [name, setName] = useState<string>(user?.fullName ?? "");
  const [bio, setBio] = useState<string>(user?.bio ?? "");

  const handleSave = () => {
    onClick();
    if (user) {
      dispatch({
        type: UserActionType.UPDATE,
        payload: { ...user, fullName: name, bio: bio },
      });
    }
  };

  return (
    <>
      {editable && (
        <div className="mb-4 flex flex-col gap-4">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="name" className="font-bold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col gap-1">
            <label htmlFor="name" className="font-bold">
              Bio:
            </label>
            <textarea
              name="name"
              className="input-field"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
      )}

      {editable ? (
        <button
          className="button mb-4 w-full bg-pink-500 hover:bg-pink-400"
          onClick={handleSave}
        >
          Save profile
        </button>
      ) : (
        <button className="button mb-4 w-full" onClick={onClick}>
          Edit profile
        </button>
      )}
    </>
  );
};

export default EditProfileSection;
