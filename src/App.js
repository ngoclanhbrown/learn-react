import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Detail from "./Detail";

const App = () => {
  return (
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
  );
};

export default App;
