import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/NavBar/navbar";
import Footer from "./component/Footer/Footer";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="text-gray-400 bg-body">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
