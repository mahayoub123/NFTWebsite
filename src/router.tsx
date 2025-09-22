import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ArtistPage from "./pages/ArtistPage";
import NFTPage from "./pages/NFTPage";
import MarketPlace from "./pages/MarketPlace";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
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
]);
