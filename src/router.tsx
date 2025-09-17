import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

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
]);
