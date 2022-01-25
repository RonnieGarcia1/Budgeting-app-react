import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TransactionDetails from "./TransactionDetails";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="back-to-home" to="/">
        <img src="https://i.pinimg.com/originals/e3/7e/7d/e37e7dee6ac2b5b56f7a132bec0d5224.png" alt="Budget App Logo" />
        {/* <h3>Budget App®</h3> */}
      </Link>
      <span>
        <TransactionDetails />
      <Button variant="outlined" className="transactions-btn">
        <Link className="new-transaction-btn" to="/transactions/new">NEW TRANSACTION</Link>
      </Button>
      <div className="bank-account-total">
      </div>
      </span>
    </nav>
  );
}
