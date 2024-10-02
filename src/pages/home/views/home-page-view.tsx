import { lazy } from "react";

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

const text: string = `Traveling… It is more than therapy. It is the perfect medicine!
Discovering the world is a way to open your mind, widen your
experiences, and meet new people, culture and is essential for your
well being. Are you thinking about Italy for your next destination?
And the Italian Dolce Vita is the perfect way to feel better.`;

const country: { name: string; population: string; capital: string } = {
  name: "Italy",
  population: "58,968,501",
  capital: "Rome",
};

export const HomePageView = () => {
  return (
    <>
      <LazyHero heroText={text} />
      <LazyCard>
        <LazyCardHeader />
        <LazyCardContent {...country} />
        <LazyCardFooter />
      </LazyCard>
    </>
  );
};
