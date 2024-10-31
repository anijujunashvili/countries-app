import { ChangeEvent, useState, useRef } from "react";
import "./otp.css";

type propsType = {
  length: number;
  onChangeOtp: (o: string) => void;
};

const OtpContent: React.FC<propsType> = (props) => {
  const length = props.length;
  const onChangeOtp = props.onChangeOtp;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value: string = e.target.value;
    console.log(value);
    if (isNaN(Number(value))) return;
    if (!value) return;
    const newOtp: typeof otp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value && inputRef.current != null) {
      inputRef?.current[index + 1]?.focus();
    }
    if (index == length - 1 && inputRef.current != null) {
      inputRef?.current[index]?.blur();
    }
    onChangeOtp(newOtp.join(""));
  };
  const handleBackspace = (index: number) => {
    const newOtp: typeof otp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    if (index > 0 && inputRef.current != null) {
      inputRef?.current[index - 1]?.focus();
    }
    onChangeOtp(newOtp.join(""));
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const data = e.clipboardData.getData("Text");
    if (isNaN(Number(data))) return;
    const arr = data.split("", length - index);

    const newOtp: typeof otp = [...otp];
    let j = 0;
    const start = index == 0 ? 0 : length - arr.length;
    for (let i = start; i < length; i++) {
      newOtp[i] = arr[j] ? arr[j] : "";

      j++;
    }

    setOtp(newOtp);
    onChangeOtp(newOtp.join(""));
  };
  return (
    <>
      <div className="otp">
        {otp.map((data, index) => (
          <input
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            key={index}
            type="text"
            maxLength={1}
            value={data}
            style={{ width: "40px" }}
            onChange={(e) => handleChange(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            onKeyDown={(e) => {
              if (e.key == "Backspace") {
                handleBackspace(index);
              }
            }}
          />
        ))}
      </div>
    </>
  );
};

export default OtpContent;
