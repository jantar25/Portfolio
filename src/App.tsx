import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/NavBar/navbar";
import Footer from "./Sections/Footer/Footer";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <div className="text-gray-400 bg-body">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
