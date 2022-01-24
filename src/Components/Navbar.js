import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TransactionDetails from "./TransactionDetails";
// import logo from "./home.png";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="back-to-home" to="/">
        <strong>Budget App®</strong>
      </Link>

      <Button variant="outlined" className="transactions-btn">
        <Link className="new-transaction-btn" to="/transactions/new">NEW TRANSACTION</Link>
      </Button>
      <div className="bank-account-total">
        <TransactionDetails />
      </div>
    </nav>
  );
}
