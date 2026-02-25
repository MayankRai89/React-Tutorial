import RightCard from "./RightCard";

const RightContent = ({ users }) => {
  return (
    <div
      id="right"
      className="h-full flex overflow-x-auto rounded-4xl flex-nowrap gap-10 w-2/3 p-6"
    >
      {users?.map((user, index) => (
        <RightCard key={index} user={user} index={index} />
      ))}
    </div>
  );
};

export default RightContent;
