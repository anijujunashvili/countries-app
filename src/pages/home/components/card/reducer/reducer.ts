type counrtiesListState = {
  id: string;
  name: string;
  capital: string;
  population: string;
  flag: string;
  cover: string;
  intro: string;
  vote: number;
};

type Action = {
  type: "upvote" | "add" | "sort" | "delete" | "restore";
  payload: any;
};

const countryReducer = (countriesList: counrtiesListState, action: Action) => {
  if (action.type === "upvote") {
    const newCountryObject = countriesList.map((country) => {
      if (country.id === action.payload.id) {
        return { ...country, vote: country.vote + 1 };
      }

      return { ...country };
    });
    return newCountryObject;
  }
  if (action.type === "sort") {
    const sortedData = [...countriesList].sort((a, b) => {
      if (!a.disabled && !b.disabled) {
        return action.payload.sortType === "asc"
          ? a.vote - b.vote
          : b.vote - a.vote;
      }
    });

    return sortedData;
  }
  if (action.type === "add") {
    const obj = action.payload.countryFields;
    const imgName = Math.floor(Math.random() * 4) + 1;
    const newCountriesList = [
      ...countriesList,
      {
        ...obj,
        flag: "no-flag.jpg",
        cover: `${imgName}.jpg`,
        vote: 0,
        id: (Number(countriesList.at(-1)?.id) + 1).toString(),
        disabled: 0,
      },
    ];

    return newCountriesList;
  }
  if (action.type === "delete") {
    const newCountryObject = countriesList.map((country) => {
      if (country.id === action.payload.id) {
        return { ...country, disabled: 1 };
      }

      return { ...country };
    });
    return newCountryObject;
  }

  if (action.type === "restore") {
    const newCountryObject = countriesList.map((country) => {
      if (country.id === action.payload.id) {
        return { ...country, disabled: 0 };
      }

      return { ...country };
    });
    return newCountryObject;
  }

  return countriesList;
};

export default countryReducer;
