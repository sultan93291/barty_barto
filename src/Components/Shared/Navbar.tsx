import Container from "./Container";
import Logo from "/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#F9FAFB] py-6 fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <div className="flex gap-x-6">
            <button className="px-[38px] py-3 hover:bg-[#13A6EF] hover:text-white duration-300 ease-in-out rounded-[3px]  border border-[#13A6EF] font-sans text-[15px] font-bold cursor-pointer">
              Login
            </button>
            <button className="px-[38px] py-3 rounded-[3px] bg-[#13A6EF]  border border-[#13A6EF] hover:bg-white hover:text-black duration-300 ease-in-out font-sans text-[15px] font-bold cursor-pointer text-white">
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
