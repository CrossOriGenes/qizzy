import React, { useState, useEffect, useContext, createContext } from "react";

const AppStore = createContext();

const AppStoreProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);

  function toggleDarkMode() {
    setDark(!isDark);
    if (!isDark) {
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  useEffect(() => {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") == "dark") {
      document.querySelector("body").classList.add("dark");
      setDark(!isDark);
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, []);

  const values = {
    toggleDarkMode,
  };

  return <AppStore.Provider value={values}>{children}</AppStore.Provider>;
};

export default AppStoreProvider;

export const useStore = () => useContext(AppStore);
