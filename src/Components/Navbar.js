import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <nav>
      
      <Link className="back-to-home" to="/">Budget App</Link>
      <Button variant="outlined" className="transactions-btn">
        <Link to="/transactions/new">NEW TRANSACTION</Link>
      </Button>
    </nav>
  );
}
