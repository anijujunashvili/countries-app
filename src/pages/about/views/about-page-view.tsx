import { about } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

function AboutPageView() {
  const { lang } = useParams();

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>{about[lang]}</h1>
      </div>
    </>
  );
}
export default AboutPageView;
