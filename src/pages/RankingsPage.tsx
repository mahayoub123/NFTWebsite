import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import RankingHero from "../components/RankingHero/RankingHero";
import RankingMenu from "../components/RankingMenu/RankingMenu";

const RankingsPage = () => {
  return (
    <div>
      <Navbar />
      <RankingHero />
      <RankingMenu />
      <Footer />
    </div>
  );
};

export default RankingsPage;
