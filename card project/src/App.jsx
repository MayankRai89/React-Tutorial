import Card from "./component/Card";

const App = () => {
  const jobListings = [
    {
      companyName: "Google",
      logo: "https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png",
      posted: "3 days ago",
      role: "UI/UX Designer",
      type: "Full Time",
      pay: "$110/hr",
      location: "Bangalore, India",
    },
    {
      companyName: "Amazon",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6359bA5OWBS_vzZGEXagWbdbdO0QYNdrxnw&s ",
      posted: "5 days ago",
      role: "Frontend Developer",
      type: "Full Time",
      pay: "$95/hr",
      location: "Hyderabad, India",
    },
    {
      companyName: "Meta",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQY_tBnW7w5QJcnmJT4FP6I95XsOnkXU1nQ&s",
      posted: "2 days ago",
      role: "Product Designer",
      type: "Full Time",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      companyName: "Apple",
      logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPl5lJB_vqeClMr3lbZKgjkrmFR56OVW1Ag&s",
      posted: "1 day ago",
      role: "iOS Developer",
      type: "Full Time",
      pay: "$130/hr",
      location: "Delhi, India",
    },
    {
      companyName: "Netflix",
      logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9KXwR4GWutwgGkruEjGwX9OckTQND7bwPA&s",
      posted: "7 days ago",
      role: "UI Engineer",
      type: "Contract",
      pay: "$140/hr",
      location: "Remote",
    },
    {
      companyName: "Microsoft",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s",
      posted: "4 days ago",
      role: "React Developer",
      type: "Full Time",
      pay: "$105/hr",
      location: "Hyderabad, India",
    },
    {
      companyName: "Tesla",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxwMWBlbTtF9BGhILMBNEc-19WWpmr6gciA&s ",
      posted: "6 days ago",
      role: "Frontend Engineer",
      type: "Full Time",
      pay: "$115/hr",
      location: "Pune, India",
    },
    {
      companyName: "Adobe",
      logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVJEXEBzQsYeYM2ZPhONVjq45iRLLXjdLUA&s",
      posted: "8 days ago",
      role: "UX Researcher",
      type: "Part Time",
      pay: "$90/hr",
      location: "Noida, India",
    },
    {
      companyName: "Uber",
      logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULAxQ30imMFwoBAl1Z1ZVpsfPQEzLyP--Cg&s ",
      posted: "2 days ago",
      role: "Web Developer",
      type: "Full Time",
      pay: "$100/hr",
      location: "Bangalore, India",
    },
    {
      companyName: "Airbnb",
      logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8En5lBxCgbT2Cg8FlQYx_BEyvhuFog5AqNw&s",
      posted: "9 days ago",
      role: "Product Designer",
      type: "Contract",
      pay: "$125/hr",
      location: "Remote",
    },
  ];
  return (
    <div className="parent">
      {jobListings.map(function (props) {
        return (
          <Card
            logo={props.logo}
            company={props.companyName}
            post={props.posted}
            Role={props.role}
            sal={props.pay}
            loc={props.location}
            type={props.type}
          />
        );
      })}
    </div>
  );
};

export default App;
