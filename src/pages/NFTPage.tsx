import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import NFTCard from "../components/NFTCard/NFTCard";
import NFTHero from "../components/NFTHero/NFTHero";

const NFTPage = () => {
  return (
    <div>
      <Navbar />
      <NFTHero />
      <NFTCard />
      <Footer />
    </div>
  );
};

export default NFTPage;
