import React from "react";
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = ({ users }) => {
  return (
    <div className="min-h-screen w-full bg-amber-200">
      <Navbar />
      <Page1Content users={users} />
    </div>
  );
};

export default Section1;
