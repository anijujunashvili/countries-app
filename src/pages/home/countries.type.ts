type nameType = {
  ka: string;
  en: string;
};
type capitalType = {
  ka: string;
  en: string;
};
export type Countries = {
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
export type newCountries = {
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
