import { lazy, useState } from "react";
import countries from "../static/countries-data";
import heroText from "../static/hero_text";

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
  const [countriesList, setCountriesList] = useState(countries);

  const handleVoteUp = (id: string) => {
    const newCountryObject = countriesList.map((country) => {
      if (country.id === id) {
        return { ...country, vote: country.vote + 1 };
      }

      return { ...country };
    });
    setCountriesList(newCountryObject);
  };

  const handleSort = () => {
    const sortedData = [...countriesList].sort((a, b) => {
      return a.vote > b.vote ? 1 : -1;
    });
    console.log(sortedData);
    setCountriesList(sortedData);
  };

  return (
    <>
      <LazyHero heroText={heroText} />
      <div className="container">
        <button onClick={handleSort}>Sort by asc</button>
      </div>
      <div className="container">
        {countriesList.map((country_item) => (
          <LazyCard key={country_item.id}>
            <LazyCardHeader cover={country_item.cover} />
            <LazyCardContent
              {...country_item}
              onUpVote={() => handleVoteUp(country_item.id)}
            />
            <LazyCardFooter countryId={country_item.id} />
          </LazyCard>
        ))}
      </div>
    </>
  );
};
