import './App.css';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Details from "./Pages/Details.js"
import FourOFour from "./Pages/Four0Four.js";
import BasicModal from './Components/BasicModal';
import BudgetTotal from './Components/BudgetTotal'
import ShowOne from './Pages/ShowOne';
import Edit from './Pages/Edit';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <BudgetTotal />
        <main>
        <Routes>
          <Route path="/" element={<Details />} />
          <Route path="/transactions" element={<Details/>} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element= {<ShowOne />} />
          <Route path="/transactions/:index/edit" element= {<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        </main>
      </Router>
      <footer className="footer">
        <BasicModal />
      </footer>
    </div>
  );
}

export default App;
