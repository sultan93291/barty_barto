import { useForm } from "react-hook-form";
import Authbg from "/authbg.jpg";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
};

const ForgotPassword = () => {
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
      className="bg-cover bg-center bg-no-repeat w-full pt-[220px] pb-20 h-screen"
      style={{ backgroundImage: `url(${Authbg})` }}
    >
      <div className="w-[900px] bg-white mx-auto px-[94px] py-10 rounded-[18px] backdrop-blur-[16px] h-fit">
        <h2 className="text-[40px] text-center font-sans text-[#222] font-bold">
          Forgot Password
        </h2>
        <h4 className="text-[18px] text-[#5A5C5F] font-normal text-center mt-5 px-28">
          Please provide your registered email address to receive a password
          reset code.
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
          <Link to="/account-confirmation">
            <button
              type="submit"
              className="bg-[#13A6EF] px-[100px] py-[18px] mt-10 text-white font-bold font-sans text-[18px] rounded-[8px] w-full cursor-pointer border border-[#13A6EF] hover:bg-white hover:text-black duration-300 ease-in-out"
            >
              Send Code
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
