import { useForm } from "react-hook-form";
import Authbg from "/authbg.jpg";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";

const AccountConfirmation = () => {
  const [otp, setOtp] = useState<string>("");
  const [timer, setTimer] = useState<number>(25);
  const [resendAvailable, setResendAvailable] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: {},
  } = useForm();

  useEffect(() => {
    if (timer === 0) {
      setResendAvailable(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const onSubmit = () => {
    if (otp.length !== 6) {
      alert("Please enter the complete 6-digit code.");
      return;
    }

    console.log("OTP Entered:", otp);
  };

  const handleResend = () => {
    if (!resendAvailable) return;

    console.log("Resending OTP...");
    setTimer(25);
    setResendAvailable(false);
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full pt-[220px] pb-20 h-screen"
      style={{ backgroundImage: `url(${Authbg})` }}
    >
      <div className="w-[900px] bg-white mx-auto px-[94px] py-10 rounded-[18px] backdrop-blur-[16px] h-fit">
        <h2 className="text-[40px] text-center font-sans text-[#222] font-bold">
          Confirmation Code
        </h2>
        <h4 className="text-[18px] text-[#5A5C5F] font-normal text-center mt-5 px-18">
          Enter the confirmation code sent to your email address:{" "}
          <span className="font-semibold text-black">abcdfgf@gmail.com</span>
        </h4>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
          <div>
            <h5 className="text-[#222] font-sans font-medium pb-4">Code</h5>
            <div className="flex justify-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="tel"
                shouldAutoFocus
                renderSeparator={<span className="mx-5">-</span>}
                renderInput={props => (
                  <input
                    {...props}
                    className="!w-20 !h-20  text-center text-xl font-bold border border-[#CFCFCF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#13A6EF] transition-all duration-200"
                  />
                )}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#13A6EF] px-[100px] py-[18px] mt-10 text-white font-bold font-sans text-[18px] rounded-[8px] w-full cursor-pointer border border-[#13A6EF] hover:bg-white hover:text-black duration-300 ease-in-out"
          >
            Confirm Code
          </button>

          <p className="text-[#5A5C5F] font-sans font-normal pt-5 text-center">
            Didn’t receive the code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={!resendAvailable}
              className={`font-bold ${
                resendAvailable
                  ? "text-[#222]"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Resend
            </button>{" "}
            {resendAvailable ? null : `in ${timer}s`}
          </p>
        </form>
      </div>
    </section>
  );
};

export default AccountConfirmation;
