import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Home from "./pages/Home";
import HeaderTop from "./HeaderTop";
import Header from "./Header";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import APIContextProvider from "../context/apiContext";

function App() {
  return (
    <APIContextProvider>
      <div>
        <Router>
          <HeaderTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </APIContextProvider>
  );
}

export default App;
