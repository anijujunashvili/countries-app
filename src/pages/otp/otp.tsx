import { useState } from "react";
import OtpContent from "./otp-child";
import "./otp.css";

const OtpPageView = () => {
  const [otp, setOtp] = useState<string>("");

  const handleChangeOtp = (newOtp: string) => {
    setOtp(newOtp);
  };
  return (
    <>
      <div className="otp-container">
        <OtpContent length={4} onChangeOtp={handleChangeOtp} />
        <p>Otp:{otp}</p>
      </div>
    </>
  );
};

export default OtpPageView;
