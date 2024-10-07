import { lazy } from "react";
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
  return (
    <>
      <LazyHero heroText={heroText} />
      <div className="container">
        {countries.map((country_item) => (
          <LazyCard key={country_item.id}>
            <LazyCardHeader cover={country_item.cover} />
            <LazyCardContent {...country_item} />
            <LazyCardFooter countryId={country_item.id} />
          </LazyCard>
        ))}
      </div>
    </>
  );
};
