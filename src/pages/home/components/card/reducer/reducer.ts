type counrtiesListState = {
  id: string;
  name: string;
  capital: string;
  population: string;
  flag: string;
  image: string;
  intro: string;
  vote: number;
};

type Action = {
  type: "upvote" | "add" | "sort" | "delete" | "restore";
  payload: any;
};

const countryReducer = (countriesList: counrtiesListState, action: Action) => {
  if (action.type === "upvote") {
    const lang = action.payload.lang;
    const obj = countriesList[lang] ? countriesList[lang] : countriesList;

    const newCountryObject = obj.map((country) => {
      if (country.id === action.payload.id) {
        return { ...country, vote: String(Number(country.vote) + 1) };
      }

      return { ...country };
    });
    return newCountryObject;
  }
  if (action.type === "sort") {
    const lang = action.payload.lang;
    const obj = countriesList[lang] ? countriesList[lang] : countriesList;

    const sortedData = [...obj].sort((a, b) => {
      if (!a.disabled && !b.disabled) {
        return action.payload.sortType === "asc"
          ? a.vote - b.vote
          : b.vote - a.vote;
      }
    });

    return sortedData;
  }
  if (action.type === "add") {
    const lang = action.payload.lang;
    const obj = action.payload.countryFields;

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
  if (action.type === "delete") {
    const lang = action.payload.lang;
    const obj = countriesList[lang] ? countriesList[lang] : countriesList;
    const newCountryObject = obj.map((country) => {
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
