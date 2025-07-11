import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import AppStoreProvider from "./context/AppStoreProvider";
import Root from "./pages/Home/Root";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "",
    index: true,
    element: <Root />,
  },
  {
    path: "home",
    children: [
      { index: true, element: <Home /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      delay: 50,
      duration: 900,
      easing: "ease",
      once: true, 
      throttleDelay: 150
    });
  }, []);

  return (
    <AppStoreProvider>
      <RouterProvider router={router} />
    </AppStoreProvider>
  );
}

export default App;
