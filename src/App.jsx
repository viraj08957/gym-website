import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Classes from "./components/Classes";
import Schedules from "./components/Schedules";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";

const AppContext = React.createContext();
export { AppContext };

export default function App() {
  const sectionRefs = React.useRef([]);
  const homeRef = React.useRef();
  const [homeVisibility, setHomeVisibility] = React.useState(true);

  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light-theme");
  }
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light-theme"
  );
  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === "light-theme") {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-theme");
        return "dark-theme";
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-theme");
        return "light-theme";
      }
    });
  }

  const windowWidth = window.innerWidth;
  const isBigWindow = windowWidth >= 1200 ? true : false;

  return (
    <AppContext.Provider
      value={{
        homeRef,
        homeVisibility,
        setHomeVisibility,
        theme,
        toggleTheme,
        sectionRefs,
        isBigWindow,
      }}
    >
      <div className={`${theme}`}>
        <Nav />
        <Home />
        <About />
        <CallToAction />
        <Classes />
        <Schedules />
        <Trainers />
        <Contact />
      </div>
    </AppContext.Provider>
  );
}
