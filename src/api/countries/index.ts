import { httpClient } from "@/api";
type nameType = {
  ka: string;
  en: string;
};
type capitalType = {
  ka: string;
  en: string;
};
type Countries = {
  name: nameType;
  population: string;
  capital: capitalType;
  image: string;
  vote: number;
};
type newCountries = {
  id: string;
  name: nameType;
  population: string;
  flag: string;
  capital: capitalType;
  disabled: number;
  intro: nameType;
  image: string;
  uploaded: number;
  vote: number;
};
type voteType = {
  vote: number;
};
export const getCountries = async (): Promise<newCountries[]> => {
  try {
    return await httpClient.get("/countriesList").then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export const deleteCountry = async ({
  id,
}: {
  id: string;
}): Promise<newCountries[]> => {
  try {
    return await httpClient.delete(`/countriesList/${id}`);
  } catch (error) {
    console.log("error:", error);
    return [];
  }
};

export const updateCountry = async ({
  id,
  payload,
}: {
  id: string;
  payload: Countries | voteType;
}): Promise<newCountries[]> => {
  try {
    return await httpClient.patch(`/countriesList/${id}`, payload);
  } catch (error) {
    console.log("error:", error);
    return [];
  }
};

export const addCountry = async ({
  payload,
}: {
  payload: newCountries;
}): Promise<newCountries[]> => {
  try {
    return await httpClient.post(`/countriesList/`, payload).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log("error:", error);
    return [];
  }
};
