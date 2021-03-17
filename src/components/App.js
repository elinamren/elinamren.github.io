import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Mountains from "./Mountains";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
