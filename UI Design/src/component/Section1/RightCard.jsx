import RightCardContent from "./RightCardContent";

const RightCard = ({ user, index }) => {
  return (
    <div className="h-full w-65 shrink-0 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={user.img}
        alt={user.tag}
      />

      <RightCardContent user={user} index={index} />
    </div>
  );
};

export default RightCard;
