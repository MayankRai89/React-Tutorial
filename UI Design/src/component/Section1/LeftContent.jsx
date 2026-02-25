import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <div className="p-7">
        <h3 className=" mb-5  text-6xl font-bold">
          Prospective <br /> <span className="text-gray-200 ">Customer </span>{" "}
          <br />
          segmentation
        </h3>
        <p className="text-xl font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          saepe aut est, inventore possimus debitis, eos commodi vitae
          voluptatem ex facilis maiores eaque fugit quisquam?
        </p>
      </div>
      <div>
        <ArrowUpRight size={96} />
      </div>
    </div>
  );
};

export default LeftContent;
