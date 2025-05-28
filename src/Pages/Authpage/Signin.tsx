import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Authbg from "/authbg.jpg";

type FormData = {
  email: string;
  password: string;
  terms: boolean;
};

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Login data:", data);
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full pt-[181px] pb-20 h-screen"
      style={{ backgroundImage: `url(${Authbg})` }}
    >
      <div className="w-[900px] bg-white mx-auto px-[94px] py-10 rounded-[18px] backdrop-blur-[16px] h-fit">
        <h2 className="text-[40px] text-center font-sans text-[#222] font-bold">
          Log In
        </h2>
        <h4 className="text-[18px] text-[#5A5C5F] font-medium text-center mt-5">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-[#222] font-bold">
            Sign up
          </Link>
        </h4>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
          <div>
            <h3 className="text-[18px] font-medium text-[#222] pb-4">
              Email Address
            </h3>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="charlicurs@gmail.com"
              className="border border-[#CFCFCF] rounded-[8px] py-[11px] px-6 text-[#5A5C5F] text-[16px] w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative mt-6">
            <h3 className="text-[18px] font-medium text-[#222] pb-4">
              Password
            </h3>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              placeholder="********"
              className="border border-[#CFCFCF] rounded-[8px] py-[11px] px-6 text-[#5A5C5F] text-[16px] w-full"
            />
            <div
              className="absolute right-4 top-[57px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between pt-5">
            <div className="flex gap-x-3">
              <input
                type="checkbox"
                {...register("terms", { required: true })}
                className="w-6 h-6 rounded-[8px] appearance-none border border-black checked:bg-black cursor-pointer"
              />
              <p className="text-[16px] text-[#494949] font-sans">
                Remember me
              </p>
            </div>
            <Link to="/forgot-password" className="text-[16px] text-[#494949] font-sans">
              Forgot password ?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-[#13A6EF] px-[100px] py-[18px] mt-10 text-white font-bold font-sans text-[18px] rounded-[8px] w-full cursor-pointer border border-[#13A6EF] hover:bg-white hover:text-black duration-300 ease-in-out"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signin;
