import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import Navbar from "./Navbar";
import Loader from "./Loader";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Footer from "../components/Footer";
import EducationAndExperience from "./EducationAndExperience";
import Contact from "../pages/Contact";

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleDataFromChild = (data) => {
    setMenuOpen(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="bg-[#171C28] max-md:px-4 max-xl:px-10 text-white px-44 min-h-screen pb-10">
      <Navbar sendDataToParent={handleDataFromChild} />
      {loading ? (
        <Loader />
      ) : (
        !menuOpen && (
          <>
            <button
              title="GO TO TOP"
              className={`rounded-lg py-3 px-2 text-2xl text-purple-500 hover:text-white bg-white hover:bg-purple-500 fixed right-10 bottom-10 shadow-lg z-40 shadow-purple-900 ${
                visible ? "block" : "hidden"
              }`}
              onClick={scrollToTop}
            >
              <GoArrowUp />
            </button>
            <About />
            <Skills />
            <Projects />
            <EducationAndExperience />
            <Contact />
            <Footer />
          </>
        )
      )}
    </div>
  );
};
