import { ArrowRight } from "lucide-react";

const RightCardContent = ({ user, index }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between bg-gradient from-black/70 to-transparent">
      <h2 className="bg-white text-2xl h-14 w-14 flex justify-center items-center font-semibold rounded-full">
        {index + 1}
      </h2>

      <div>
        <p className="text-lg leading-relaxed text-white mb-10">
          {user.intro || "Professional users who trust our services."}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          style={{ backgroundColor: user.color }}
          className=" text-white font-medium px-8 py-2 rounded-full text-sm"
        >
          {user.tag}
        </button>

        <button
          style={{ backgroundColor: user.color }}
          className=" text-white font-medium px-4 py-2 rounded-full text-sm"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
