import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Detail from "./Detail";
import { useState } from "react";

const App = () => {
  const themeColorState = useState("green");

  return (
    <ThemeContext.Provider value={themeColorState}>
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
