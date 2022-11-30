import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
