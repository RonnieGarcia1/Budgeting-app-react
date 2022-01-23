import './App.css';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Details from "./Pages/Details.js";
import FourOFour from "./Pages/Four0Four.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/details" element= {<Details />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
