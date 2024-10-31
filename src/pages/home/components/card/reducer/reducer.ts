import initialState from "./state.ts";

type countryFieldsType = {
  id?: string;
  name: string;
  nameEn: string;
  capital: string;
  capitalEn: string;
  population: string;
  image: string;
};
type nameType = {
  ka: string;
  en: string;
};
type capitalType = {
  ka: string;
  en: string;
};

type counrtiesListState = {
  id: string;
  name: nameType;
  capital: capitalType;
  population: string;
  flag: string;
  image: string;
  intro: capitalType;
  vote: number;
  uploaded: number;
  disabled: number;
};

type addType = {
  countryFields: countryFieldsType;
  lang: string;
};
type upvoteType = {
  id: string;
};
type sortType = {
  sortType: string;
};
type Action =
  | { type: "upvote"; payload: upvoteType }
  | { type: "add"; payload: addType }
  | { type: "sort"; payload: sortType }
  | { type: "delete"; payload: upvoteType }
  | { type: "restore"; payload: upvoteType };

const countryReducer = (
  countriesList: typeof initialState,
  action: Action,
): typeof initialState => {
  if (action.type === "upvote") {
    const obj = countriesList;
    if (obj instanceof Array) {
      const newCountryObject = obj.map((country: counrtiesListState) => {
        if (country.id === action.payload.id) {
          //return { ...country, vote: String(Number(country.vote) + 1) };
          return { ...country, vote: Number(country.vote + 1) };
        }

        return { ...country };
      });
      return newCountryObject;
    }
  }
  if (action.type === "sort") {
    const obj = countriesList;

    if (obj && obj instanceof Array) {
      const sortedData = [...obj].sort((a, b) => {
        //if (a.disabled !==  && b.disabled !== 0) {
        return action.payload.sortType === "asc"
          ? a.vote - b.vote
          : b.vote - a.vote;
        // }
      });

      console.log(sortedData);
      return sortedData;
    }
  }
  if (action.type === "add") {
    const obj = action.payload.countryFields;

    if (obj && countriesList instanceof Array) {
      const newCountriesList = [
        ...countriesList,
        {
          id: (Number(countriesList.at(-1)?.id) + 1).toString(),
          name: {
            ka: obj.name,
            en: obj.nameEn,
          },
          capital: {
            ka: obj.capital,
            en: obj.capitalEn,
          },
          population: obj.population,
          flag: "georgia.png",
          image: obj.image,
          intro: {
            ka: `იტალიის დედაქალაქი რომი საუკუნეთა განმავლობაში დასავლური ცივილიზაციის პოლიტიკურ და რელიგიურ ცენტრს წარმოადგენდა, როგორც რომის იმპერიის დედაქალაქი და წმინდა ეპარქიის ადგილსამყოფელი. რომის იმპერიის დაცემის შემდეგ იტალიამ გაუძლო უცხოელ ხალხთა მრავალ ინვანსიას, ძირითადად ისეთი ხალხებისგან როგორებიც იყვნენ გერმანიკული ტომები — ლანგობარდები და ოსტგუთები, შემდეგ ბიზანტიელები, უფრო მოგვიანებით კი ნორმანები და ა. შ. საუკუნეების შემდეგ, იტალია საზღვაო რესპუბლიკებისა და რენესანსის სამშობლო გახდა.[7]`,
            en: "Iyaly",
          },
          vote: 0,
          disabled: 0,
          uploaded: 1,
        },
      ];

      return newCountriesList;
    }
  }
  if (action.type === "delete") {
    if (countriesList instanceof Array) {
      const newCountryObject = countriesList.map(
        (country: counrtiesListState) => {
          if (country.id === action.payload.id) {
            return { ...country, disabled: 1 };
          }

          return { ...country };
        },
      );

      return newCountryObject;
    }
  }

  if (action.type === "restore") {
    if (countriesList instanceof Array) {
      const newCountryObject = countriesList.map(
        (country: counrtiesListState) => {
          if (country.id === action.payload.id) {
            return { ...country, disabled: 0 };
          }

          return { ...country };
        },
      );
      return newCountryObject;
    }
  }

  return countriesList;
};

export default countryReducer;
