import {
  Dashboardicon,
  Flight,
  Logout,
  Passenger,
  Settings,
  Signature,
} from "./Icons/Svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", icon: <Dashboardicon />, path: "/dashboard-form" },
    { label: "Create A Flight", icon: <Flight />, path: "/create-flight" },
    {
      label: "All Passengers & Crew",
      icon: <Passenger />,
      path: "/allpassenger-crew",
    },
    { label: "Signature", icon: <Signature />, path: "" },
    { label: "Settings", icon: <Settings />, path: "" },
  ];

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <section className="fixed h-screen  bg-[#002232] z-20 px-[10px] pt-[150px] flex flex-col justify-between pb-10">
      <ul className="flex flex-col gap-5">
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-x-3 text-[20px] font-medium px-9 py-5 rounded-lg cursor-pointer transition-colors duration-300 ${
                  isActive
                    ? "bg-[#13A6EF] text-white"
                    : "text-white hover:bg-[#13A6EF]"
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={handleLogout}
        className="text-white hover:bg-[#13A6EF] flex items-center gap-x-3 cursor-pointer text-[20px] font-medium px-9 py-5 rounded-lg transition-colors duration-300"
      >
        <span className="material-icons">
          <Logout />
        </span>{" "}
        Logout
      </button>
    </section>
  );
};

export default Sidebar;
