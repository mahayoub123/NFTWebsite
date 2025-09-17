import Categories from "../components/Categories/Categories";
import DiscoverCards from "../components/DiscoverCards/DiscoverCards";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/NavBar";
import TopCreators from "../components/TopCreators/TopCreators";
import TrendingCollection from "../components/TrendingCollection/TrendingCollection";
import WeeklyDigest from "../components/WeeklyDigest/WeeklyDigest";
import WorkCards from "../components/WorkCards/WorkCards";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <Categories />
      <DiscoverCards />
      <WorkCards />
      <WeeklyDigest />
    </div>
  );
};

export default HomePage;
