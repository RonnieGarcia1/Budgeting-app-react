import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/home">Budget App</Link>
      <span>
      <button className="transactions-btn">
        <Link to="/transactions/new">NEW TRANSACTION</Link>
      </button>
      </span>
    </nav>
  );
}
