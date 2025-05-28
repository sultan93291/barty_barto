import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Authbg from "/authbg.jpg";

type FormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
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
      className="bg-cover bg-center bg-no-repeat w-full pt-[220px] pb-20 h-screen"
      style={{ backgroundImage: `url(${Authbg})` }}
    >
      <div className="w-[900px] bg-white mx-auto px-[94px] py-10 rounded-[18px] backdrop-blur-[16px] h-fit">
        <h2 className="text-[40px] text-center font-sans text-[#222] font-bold">
          Reset Your Password
        </h2>
        <p className="text-[18px] font-sans text-[#5A5C5F] pt-4 text-center px-40">
          Enter a new password to continue using your account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="py-9">
          <div className="grid gap-6">
            <div className="relative col-span-2">
              <h3 className="text-[18px] font-medium text-[#222] pb-4">
                Enter New Password
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
            <div className="relative col-span-2">
              <h3 className="text-[18px] font-medium text-[#222] pb-4">
                Enter Confirm Password
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

          <button
            type="submit"
            className="bg-[#13A6EF] px-[100px] mt-10 py-[18px] text-white font-bold text-[18px] rounded-[8px] w-full cursor-pointer border border-[#13A6EF] hover:bg-white hover:text-black duration-300 ease-in-out"
          >
            Rest Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
