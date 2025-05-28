import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Authbg from "/authbg.jpg";
import { Link } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full pt-[151px] pb-20"
      style={{ backgroundImage: `url(${Authbg})` }}
    >
      <div className="w-[900px] bg-white mx-auto px-[94px] py-10 rounded-[18px] backdrop-blur-[16px] h-fit">
        <h2 className="text-[40px] text-center font-sans text-[#222] font-bold">
          Sign up
        </h2>
        <p className="text-[18px] font-sans text-[#5A5C5F] pt-4 text-center">
          Let's have these fields
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="py-9">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-[18px] font-medium text-[#222] pb-4">
                First name
              </h3>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="Charli"
                className="border border-[#CFCFCF] rounded-[8px] py-[11px] px-6 text-[#5A5C5F] text-[16px] w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-[18px] font-medium text-[#222] pb-4">
                Last name
              </h3>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Curs"
                className="border border-[#CFCFCF] rounded-[8px] py-[11px] px-6 text-[#5A5C5F] text-[16px] w-full"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="col-span-2">
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
            <div className="relative">
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
            <div className="relative">
              <h3 className="text-[18px] font-medium text-[#222] pb-4">
                Confirm Password
              </h3>
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: value =>
                    value === watch("password") || "Passwords do not match",
                })}
                placeholder="********"
                className="border border-[#CFCFCF] rounded-[8px] py-[11px] px-6 text-[#5A5C5F] text-[16px] w-full"
              />
              <div
                className="absolute right-4 top-[57px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-x-3 py-6">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="w-6 h-6 rounded-[8px] appearance-none border border-black checked:bg-black cursor-pointer"
            />
            <p className="text-[16px] text-[#494949]">
              I hereby confirm and accept the{" "}
              <span className="text-[#13A6EF]">Terms and Conditions </span>
              and <span className="text-[#13A6EF]">Privacy Policy.</span> I
              confirm that I am over 18 years of age.
            </p>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm -mt-4 mb-4">
              You must accept the terms
            </p>
          )}

          <button
            type="submit"
            className="bg-[#13A6EF] px-[100px] py-[18px] text-white font-bold text-[18px] rounded-[8px] w-full cursor-pointer border border-[#13A6EF] hover:bg-white hover:text-black duration-300 ease-in-out"
          >
            Registration
          </button>

          <h4 className="text-[18px] text-[#5A5C5F] font-medium text-center mt-5">
            Already have an account? <Link to="/sign-in" className="text-[#222]">Log In</Link>
          </h4>
        </form>
      </div>
    </section>
  );
};

export default Signup;
