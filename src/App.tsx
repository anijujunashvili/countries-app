import { Layout } from "c/layout";
import { Hero } from "c/hero";
import { Card } from "c/card/card";
import CardHeader from "~/src/components/card/card-header";
import { CardFooter } from "@/components/card/card-footer";
import { CardContent } from "@/components/card/card-content";

const App: React.FC = () => {
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
  return (
    <>
      <Layout>
        <Hero heroText={text} />
        <Card>
          <CardHeader />
          <CardContent
            name={country.name}
            population={country.population}
            capital={country.capital}
          />
          <CardFooter />
        </Card>
      </Layout>
    </>
  );
};

export default App;
