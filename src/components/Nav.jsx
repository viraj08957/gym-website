import React from "react";
import { AppContext } from "../App";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import "./ToggleTheme/ToggleTheme.css";
import useScrollBlock from "../services/useScrollBlock";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function Nav() {
  const navRefs = React.useRef([]);
  const { homeVisibility, sectionRefs, isBigWindow } =
    React.useContext(AppContext);
  const navClass = homeVisibility ? "nav--absolute" : "nav--fixed";

  const [blockScroll, allowScroll] = useScrollBlock();

  const [showMenu, setShowMenu] = React.useState(false);
  function toggleMenu() {
    if (!isBigWindow) {
      setShowMenu((prevShowMenu) => !prevShowMenu);
      if (showMenu) {
        allowScroll();
      } else {
        blockScroll();
      }
    }
  }

  const menu_icon = showMenu ? (
    <FaTimes onClick={toggleMenu} className="menu--icon" />
  ) : (
    <FiMenu onClick={toggleMenu} className="menu--icon" />
  );

  const navStyles =
    showMenu || isBigWindow ? { display: "flex" } : { display: "none" };

  const [visibleSections, setVisibleSections] = React.useState({
    home: false,
    about: false,
    classes: false,
    schedules: false,
    trainers: false,
    contact: false,
  });
  const visibleSectionsArray = Object.entries(visibleSections);

  React.useEffect(() => {
    const visibleSectionOptions = {
      rootMargin: "-90px 0px 0px",
    };
    const visibleSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;

        setVisibleSections((prevVisibleSections) => {
          return { ...prevVisibleSections, [`${id}`]: entry.isIntersecting };
        });
      });
    }, visibleSectionOptions);
    sectionRefs.current.forEach((element) => {
      visibleSectionObserver.observe(element);
    });
  }, []);

  React.useEffect(() => {
    let isActiveCheck = false;
    visibleSectionsArray.forEach((section, index) => {
      if (section[1] && !isActiveCheck) {
        navRefs.current[index].classList.add("active");
        isActiveCheck = true;
      } else {
        navRefs.current[index].classList.remove("active");
      }
    });
  }, [visibleSections]);

  return (
    <nav className={`${navClass}`}>
      <div className="container">
        <div className="nav--logo">
          <a className="nav--link" href="#home">
            FitStud <span className="orange--word">GYM</span>
          </a>
        </div>
        <ul style={navStyles} className="nav--list slidein">
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#home"
              ref={(element) => (navRefs.current[0] = element)}
            >
              home
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#about"
              ref={(element) => (navRefs.current[1] = element)}
            >
              about
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#classes"
              ref={(element) => (navRefs.current[2] = element)}
            >
              classes
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#schedules"
              ref={(element) => (navRefs.current[3] = element)}
            >
              schedules
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#trainers"
              ref={(element) => (navRefs.current[4] = element)}
            >
              trainers
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a
              className="nav--link"
              href="#contact"
              ref={(element) => (navRefs.current[5] = element)}
            >
              contact
            </a>
          </li>
          <li>
            <a className="nav--link signup--btn" href="#">
              sign up
            </a>
          </li>
        </ul>
        {isBigWindow ? (
          <ToggleTheme />
        ) : (
          <div className="nav--rightside-group">
            <ToggleTheme />
            {menu_icon}
          </div>
        )}
      </div>
    </nav>
  );
}
