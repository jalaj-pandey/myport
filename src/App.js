import React, { useEffect, useState } from "react";
import "./App.css";
// import { About, , , Contact, Certificates } from "./pages";
// import { Navbar, Loader, Footer } from "./components/index.js";
import { createContext } from 'react';
import { HomePage } from "./components/HomePage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "preline/preline";


export const AppContext = createContext();

function App() {
  

  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  
  

  return (
    
            <AppContext.Provider value={{ theme, switchTheme }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
  );
}

export default App;
