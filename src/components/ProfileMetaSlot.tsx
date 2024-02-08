type ProfileMetaSlotProps = { number: string; title: string };

const ProfileMetaSlot = ({ number, title }: ProfileMetaSlotProps) => {
  return (
    <div className="font-title text-center">
      <p className="text-xl font-bold">{number}</p>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

export default ProfileMetaSlot;
