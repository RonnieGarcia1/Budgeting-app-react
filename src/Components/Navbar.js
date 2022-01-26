import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="back-to-home" to="/">
        <img src="https://i.pinimg.com/originals/e3/7e/7d/e37e7dee6ac2b5b56f7a132bec0d5224.png" alt="Budget App Logo" />
      </Link>
      <br></br>
      <br></br>
      <Button variant="outlined" className="transactions-btn">
        <Link className="new-transaction-btn" to="/transactions/new">New Transaction</Link>
      </Button>
    </nav>
  );
}
