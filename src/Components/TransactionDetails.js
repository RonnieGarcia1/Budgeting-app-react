import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import Transaction from "./Transaction";

const TransactionDetails = () => {
    const navigate = useNavigate();
    const[transaction, setTransaction] = useState([]);
    const { index } = useParams();
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API+"/transactions/")
        .then((res) => setTransaction(res.data))

    }, [API, index])

    const deleteTransaction = () => {
        axios.delete(`${API}/transactions/${index}`)
        .then(() => navigate("/transactions"))
    }

    const handleDelete = () => {
        deleteTransaction();
    }

    return (
        <div>
        <h2>
            {transaction.item_name}
        </h2>
        </div>
    );
}

export default TransactionDetails;