import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ArtistPage from "./pages/ArtistPage";
import NFTPage from "./pages/NFTPage";
import MarketPlace from "./pages/MarketPlace";
import RankingsPage from "./pages/RankingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/account",
    element: <CreateAccountPage />,
  },
  {
    path: "/artist",
    element: <ArtistPage />,
  },
  {
    path: "/nft",
    element: <NFTPage />,
  },
  {
    path: "/market",
    element: <MarketPlace />,
  },
  {
    path: "/ranking",
    element: <RankingsPage />,
  },
]);
