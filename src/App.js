import "./fonts.css";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="MainContainer">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
