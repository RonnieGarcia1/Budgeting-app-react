import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      
      <Link to="/">Budget App</Link>
      <br></br>
      <button className="transactions-btn">
        <Link to="/transactions/new">NEW TRANSACTION</Link>
      </button>
    </nav>
  );
}
