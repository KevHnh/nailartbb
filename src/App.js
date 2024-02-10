import "./fonts.css";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Policies from "./components/Policies/Policies";
import Gallery from "./components/Gallery/Gallery";
import Error from "./components/Error/Error";
import Hygienic from "./components/Hygienic/Hygienic";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";

function App() {
  return (
    <div className="MainContainer">
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Error />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/Policies" element={<Policies />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Hygienic" element={<Hygienic />}></Route>
          <Route path="/Privacy" element={<Privacy />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
