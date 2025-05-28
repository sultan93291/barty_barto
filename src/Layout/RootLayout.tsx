import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
