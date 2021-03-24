import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Mountains from "./Mountains";
import Burger from "./Burger/Burger";
import BurgerMenu from "./Burger/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        {isMobile ? (
          <div>
            <Burger open={open} setOpen={setOpen} />
            <BurgerMenu open={open} setOpen={setOpen} />
          </div>
        ) : (
          <Navbar />
        )}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
        <Mountains />
      </Router>
    </div>
  );
}

export default App;
