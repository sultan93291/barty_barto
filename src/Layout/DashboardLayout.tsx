import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import Topbar from "../Components/Shared/Topbar";

const DashboardLayout = () => {
  return (
    <body className="bg-[#F9FAFB]">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <main className="ml-[362px] mt-[140px] w-full pr-10">
          <Outlet />
        </main>
      </div>
    </body>
  );
};

export default DashboardLayout;
