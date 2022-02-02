import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const API = process.env.REACT_APP_API_URL;


function ShowOneTransaction(){
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then((res) => {
            setTransaction(res.data)
        }).catch((error) => {
            throw error;
        });
    },  []);

    const handleDelete = () => {
        axios.delete(`${API}/transactions/${index}`)
        .then((res) => {
            navigate("/transactions")
        }).catch((error) => {
            throw error;
        });

    }

            return(
                <div>
                    <p><strong>Item:  </strong>{transaction.item_name}</p>
                    <p><strong>Date: </strong>{transaction.date}, 2022</p>
                    <p><strong>From: </strong> {transaction.from}</p>
                    <p><strong>Amount:</strong> - ${transaction.amount}.00</p>
                    <Button variant="outlined" onClick={handleDelete} >Delete</Button>
                    <Button variant="outlined" component={Link} to={`/transactions/${index}/edit`}>Edit</Button>

                </div>
    )
}

export default ShowOneTransaction;

