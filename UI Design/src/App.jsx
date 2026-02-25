import React from "react";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww",
      intro: "",
      tag: "Satisfied  ",
      color: "orange",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1678453147437-260a41db02dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underserved",
      color: "lightseagreen",
    },
    {
      img: "https://images.unsplash.com/photo-1712720010681-77cf5e4729f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Underbanked",
      color: "lightpink",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </div>
  );
};

export default App;
