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
  () => import("@/pages/home/components/card/card-content")
);
const LazyCardHeader = lazy(
  () => import("@/pages/home/components/card/card-header")
);
const LazyCardFooter = lazy(
  () => import("@/pages/home/components/card/card-footer")
);

export const HomePageView = () => {
  const [countriesList, dispatch] = useReducer(countryReducer, initialState);

  const { lang } = useParams();
  const handleVoteUp = (id: string) => {
    dispatch({ type: "upvote", payload: { id } });
  };

  const handleSort = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleNewCountry = (countryFields: {
    name: string;
    capital: string;
    population: string;
  }) => {
    dispatch({ type: "add", payload: { countryFields } });
  };

  const handleDeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
  };

  const handleDeletedCountry = (id: string) => {
    dispatch({ type: "restore", payload: { id } });
  };

  return (
    <>
      <LazyHero heroText={heroText[lang]} />
      <div className="container">
        <button
          onClick={() => handleSort("asc")}
          style={{ marginRight: "15px" }}
        >
          {common[lang].sort_asc}
        </button>
        <button onClick={() => handleSort("desc")}>
          {common[lang].sort_desc}
        </button>
        <AddCountry onCountryCreate={handleNewCountry} />
      </div>
      <div className="container">
        {countriesList[lang]
          .sort((a, b) => {
            return a.disabled - b.disabled;
          })
          .map((country_item) => (
            <LazyCard key={country_item.id}>
              {country_item.disabled ? (
                <div className="disabled">
                  <div
                    className="restore"
                    onClick={() => handleDeletedCountry(country_item.id)}
                  >
                    {common[lang].restore}
                  </div>
                </div>
              ) : (
                ""
              )}
              <LazyCardHeader cover={country_item.cover} />
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
