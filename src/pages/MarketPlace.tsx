import Footer from "../components/Footer/Footer";
import MarketCard from "../components/MarketCard/MarketCard";
import MarketHero from "../components/MarketHero/MarketHero";
import Navbar from "../components/NavBar/NavBar";

const MarketPlace = () => {
  return (
    <div>
      <Navbar />
      <MarketHero />
      <MarketCard />
      <Footer />
    </div>
  );
};

export default MarketPlace;
