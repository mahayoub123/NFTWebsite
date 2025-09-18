import ArtistCards from "../components/ArtistCards/ArtistCards";
import ArtistHero from "../components/ArtistHero/ArtistHero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";

const ArtistPage = () => {
  return (
    <div>
      <Navbar />
      <ArtistHero />
      <ArtistCards />
      <Footer />
    </div>
  );
};

export default ArtistPage;
