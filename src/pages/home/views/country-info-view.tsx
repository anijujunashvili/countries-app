import { useParams } from "react-router-dom";
import { common } from "@/translation/global.ts";
import { getCountry } from "@/api/countries/index";
import { useQuery } from "@tanstack/react-query";

function CountryInfoView() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["country-info", id],
    queryFn: () => getCountry(id as string),
  });

  if (isError) {
    return <h1>Country not found!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const lang = params.lang as keyof typeof common;

  return (
    <>
      <div
        className="container"
        style={{ height: "80vh", alignItems: "start", marginTop: "50px" }}
      >
        <img
          src={`${data?.image}`}
          style={{ width: "300px", marginRight: "30px" }}
        />

        <div style={{ color: "#474545" }}>
          <h2 style={{ textAlign: "left", marginTop: "0px" }}>
            {data?.name[lang]}
          </h2>
          {data?.intro[lang]}
        </div>
      </div>
    </>
  );
}

export default CountryInfoView;
