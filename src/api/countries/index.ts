import { httpClient } from "@/api";

export const getCountries = () => {
  return httpClient.get("/countriesList").then((res) => {
    return res.data;
  });
};
