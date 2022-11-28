import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./assets/fonts/stylesheet.css";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import Publish from "./pages/Publish";
import Paiement from "./pages/Paiement";

import Header from "./components/Header";

import { useState } from "react";

const App = () => {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");

  const [priceSort, setPriceSort] = useState("");
  const [limit, setLimit] = useState("");
  const [id, setId] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [page, setPage] = useState(1);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 2 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user/signup"
          element={<SignUp token={token} handleToken={handleToken} />}
        />
        <Route
          path="/user/login"
          element={
            <LogIn token={token} handleToken={handleToken} setId={setId} />
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/offers"
          element={
            <Offers
              search={search}
              limit={limit}
              setLimit={setLimit}
              priceSort={priceSort}
              setPriceSort={setPriceSort}
              priceMax={priceMax}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              setPriceMax={setPriceMax}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/pay" element={<Paiement token={token} id={id} />}></Route>
        <Route path="/offer/publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
