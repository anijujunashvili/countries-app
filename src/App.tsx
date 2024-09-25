import Header from "./components/header/Header.tsx";
import Hero from "./components/hero/Hero.tsx";
import Card from "./components/card/Card.tsx";
import CardHeader from "./components/card/CardHeader.tsx";
import CardFooter from "./components/card/CardFooter.tsx";
import CardContent from "./components/card/CardContent.tsx";
import Footer from "./components/footer/Footer.tsx";

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
      <Header />
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
      <Footer />
    </>
  );
};

export default App;
