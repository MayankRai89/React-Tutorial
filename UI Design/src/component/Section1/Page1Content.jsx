import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = ({ users }) => {
  return (
    <div className="pb-10 pt-4 items-center flex gap-10 h-[90vh] px-14 ">
      <LeftContent />
      <RightContent users={users} />
    </div>
  );
};

export default Page1Content;
