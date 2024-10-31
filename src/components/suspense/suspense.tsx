import "./suspense.css";
import { common } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

function SuspenseComponent() {
  const params = useParams();
  const lang = params.lang as keyof typeof common;
  return (
    <>
      <div className="hero-suspense">
        <div className="suspence-loader"></div>
        <h2>{common[lang].loading}...</h2>
      </div>
    </>
  );
}

export default SuspenseComponent;
