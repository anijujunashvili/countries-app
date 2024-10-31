import { lazy, useReducer } from "react";
import { useParams } from "react-router-dom";
import initialState from "../components/card/reducer/state.ts";
import { heroText } from "@/translation/global.ts";
import AddCountry from "../components/add-country/add-country";
import countryReducer from "../components/card/reducer/reducer.ts";
import { common } from "@/translation/global.ts";

const LazyHero = lazy(() => import("@/pages/home/components/hero"));
const LazyCard = lazy(() => import("@/pages/home/components/card/card"));
const LazyCardContent = lazy(
  () => import("@/pages/home/components/card/card-content"),
);
const LazyCardHeader = lazy(
  () => import("@/pages/home/components/card/card-header"),
);
const LazyCardFooter = lazy(
  () => import("@/pages/home/components/card/card-footer"),
);

export const HomePageView = () => {
  const [countriesList, dispatch] = useReducer(countryReducer, initialState);

  const params = useParams();
  const lang = params.lang as string;
  const lng = params.lang as keyof typeof common;

  const handleVoteUp = (id: string) => {
    if (id) {
      dispatch({ type: "upvote", payload: { id } });
    }
  };

  const handleSort = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleNewCountry = (countryFields: {
    name: string;
    nameEn: string;
    capital: string;
    capitalEn: string;
    population: string;
    image: string;
  }) => {
    dispatch({ type: "add", payload: { countryFields, lang } });
  };

  const handleDeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
  };

  const handleDeletedCountry = (id: string) => {
    dispatch({ type: "restore", payload: { id } });
  };
  type nameType = {
    ka: string;
    en: string;
  };
  type capitalType = {
    ka: string;
    en: string;
  };
  type Countries = {
    id: string;
    name: nameType;
    population: string;
    flag: string;
    capital: capitalType;
    disabled: number;
    image: string;
    uploaded: number;
    vote: number;
  };
  return (
    <>
      <LazyHero heroText={heroText[lng]} />
      <div className="container">
        <button
          onClick={() => handleSort("asc")}
          style={{ marginRight: "15px" }}
        >
          {common[lng].sort_asc}
        </button>
        <button onClick={() => handleSort("desc")}>
          {common[lng].sort_desc}
        </button>
        <AddCountry onCountryCreate={handleNewCountry} />
      </div>
      <div className="container">
        {countriesList
          .sort((a: Countries, b: Countries) => {
            return a.disabled - b.disabled;
          })
          .map((country_item: Countries) => (
            <LazyCard key={country_item.id}>
              {country_item.disabled ? (
                <div className="disabled">
                  <div
                    className="restore"
                    onClick={() => handleDeletedCountry(country_item.id)}
                  >
                    {common[lng].restore}
                  </div>
                </div>
              ) : (
                ""
              )}
              <LazyCardHeader
                image={country_item.image}
                uploaded={country_item.uploaded}
              />
              <LazyCardContent
                {...country_item}
                onUpVote={() => handleVoteUp(country_item.id)}
              />
              <LazyCardFooter
                countryId={country_item.id}
                DeleteCountry={() => handleDeleteCountry(country_item.id)}
              />
            </LazyCard>
          ))}
      </div>
    </>
  );
};
