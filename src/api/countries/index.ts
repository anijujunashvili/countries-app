import { httpClient } from "@/api";
import { Countries, newCountries, voteType } from "./countries.types";

export const getCountries = async (sort: string): Promise<newCountries[]> => {
  try {
    const endpoint =
      sort === "" ? "" : sort === "asc" ? "?_sort=vote" : "?_sort=-vote";

    const res = await httpClient.get(`/countriesList${endpoint}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchServerPage = async (
  limit: number,
  offset: number,
  sort: string,
): Promise<{
  rows: newCountries[] | [];
  nextOffset: number | null;
  lastPage: number;
}> => {
  const endpoint =
    sort === "" ? "" : sort === "asc" ? "&_sort=vote" : "&_sort=-vote";

  const res = await httpClient.get(
    `/countriesList?_page=${offset}&_per_page=${limit}${endpoint}`,
  );
  console.log(res.data.last);
  const rows = res.data.data;
  const nextOffset = offset < res.data.last ? offset + 1 : null;
  return { rows, nextOffset, lastPage: res.data.last };
};

export const getCountry = async (id: string) => {
  try {
    const res = await httpClient.get(`/countriesList/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
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
