import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  bookswap,
  ideaspotter,
  newsdoze,
  pms,
  textwiz,
  shorty
} from "../assets/images/index.js";

function Projects() {
  const [visible, setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  return (
    <div className="pb-5 h-auto my-20" id="projects">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10 flex justify-center">
        Projects
      </h1>

      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center">
        {/* Card 1 */}
        <div
          className="w-full sm:w-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative"
          onMouseOver={() => handleHover(1)}
          onMouseLeave={() => setVisible(0)}
        >
          <img className="w-full h-72 object-cover" src={shorty} alt="Blog App" />
          <div
            className={`${
              visible === 1 || !isLargeScreen
                ? "absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent"
                : "hidden"
            } max-md:from-transparent max-md:static max-md:bg-white w-full`}
          >
            <div className="px-4">
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  TheShorty
                </h1>

                <a
                  href="https://theshorty.netlify.app/"
                  className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110"
                  target="_blank"
                  title="Live Preview"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="text-gray-200 max-md:text-gray-600 text-base">
              Transform your long, messy URLs into sleek, easy-to-share links with our free URL shortener.
              </p>
            </div>
            <div className="px-4 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CSS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                NodeJs
              </span>
              
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Mongoose
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-full sm:w-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative"
          onMouseOver={() => handleHover(2)}
          onMouseLeave={() => setVisible(0)}
        >
          <img
            className="w-full h-80 object-cover"
            src={ideaspotter}
            alt="IdeaSpotter"
          />
          <div
            className={`${
              visible === 2 || !isLargeScreen
                ? "absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent"
                : "hidden"
            } max-md:from-transparent max-md:static max-md:bg-white w-full`}
          >
            <div className="px-4">
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  IdeaSpotter
                </h1>

                <a
                  href="https://ideaspotter.netlify.app/"
                  className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110"
                  target="_blank"
                  title="Live Preview"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="text-gray-200 max-md:text-gray-600 text-base">
                An application for storing and organizing notes, allowing users
                to create, edit, and categorize their notes efficiently.
              </p>
            </div>
            <div className="px-4 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Javascript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                HTML
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CSS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Firebase
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-full sm:w-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative"
          onMouseOver={() => handleHover(3)}
          onMouseLeave={() => setVisible(0)}
        >
          <img
            className="w-full h-96 object-cover"
            src={bookswap}
            alt="BookSwap"
          />
          <div
            className={`${
              visible === 3 || !isLargeScreen
                ? "absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent"
                : "hidden"
            } max-md:from-transparent max-md:static max-md:bg-white w-full`}
          >
            <div className="px-4">
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  BookSwap
                </h1>

                <a
                  href="https://swap-book.netlify.app/"
                  className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110"
                  target="_blank"
                  title="Live Preview"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="text-gray-200 max-md:text-gray-600 text-base">
                Created a platform for buying and selling second-hand books.
              </p>
            </div>
            <div className="px-4 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tailwind
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                NodeJS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                MongoDB
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="w-full sm:w-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative"
          onMouseOver={() => handleHover(4)}
          onMouseLeave={() => setVisible(0)}
        >
          <img
            className="w-full h-80 object-cover"
            src={textwiz}
            alt="Text Manipulative App"
          />
          <div
            className={`${
              visible === 4 || !isLargeScreen
                ? "absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent"
                : "hidden"
            } max-md:from-transparent max-md:static max-md:bg-white w-full`}
          >
            <div className="px-4">
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  TextWiz
                </h1>

                <a
                  href="https://jalaj-textwiz.netlify.app/"
                  className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110"
                  target="_blank"
                  title="Live Preview"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="text-gray-200 max-md:text-gray-600 text-base">
                An application designed to manipulate and transform text in
                various ways, offering features such as formatting, case
                conversion, and text analysis.
              </p>
            </div>
            <div className="px-4 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                HTML
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CSS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Javascript
              </span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="w-full sm:w-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative"
          onMouseOver={() => handleHover(5)}
          onMouseLeave={() => setVisible(0)}
        >
          <img
            className="w-full h-80 object-cover"
            src={newsdoze}
            alt="News App"
          />
          <div
            className={`${
              visible === 5 || !isLargeScreen
                ? "absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent"
                : "hidden"
            } max-md:from-transparent max-md:static max-md:bg-white w-full`}
          >
            <div className="px-4">
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                  NewsDoze
                </h1>
                <a
                  href="https://github.com/jalaj-pandey/NewsDoze"
                  className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110"
                  target="_blank"
                  title="Github Repo"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <p className="text-gray-200 max-md:text-gray-600 text-base">
                A news aggregator platform that curates and delivers
                personalized news updates, allowing users to stay informed about
                current events and topics of interest.
              </p>
            </div>
            <div className="px-4 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                CSS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Javascript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                API
              </span>
            </div>
          </div>

          
        </div>
        {/* Card 6*/}
        <div
            className="w-full sm:w-full rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative"
            onMouseOver={() => handleHover(6)}
            onMouseLeave={() => setVisible(0)}
          >
            <img
              className="w-full h-72 object-cover"
              src={pms}
              alt="Blog App"
            />
            <div
              className={`${
                visible === 6 || !isLargeScreen
                  ? "absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent"
                  : "hidden"
              } max-md:from-transparent max-md:static max-md:bg-white w-full`}
            >
              <div className="px-4">
                <div className="flex items-center gap-5">
                  <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                    Recruitedia
                  </h1>

                  <a
                    href="https://recruitedia.netlify.app/"
                    className="font-bold text-base mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110"
                    target="_blank"
                    title="Live Preview"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-gray-200 max-md:text-gray-600 text-base">
                  A system designed to streamline and manage the campus
                  placement process, including student profiles, job postings,
                  and application tracking.
                </p>
              </div>
              <div className="px-4 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  React
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  CSS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  NodeJs
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Firebase
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Mongoose
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Projects;
