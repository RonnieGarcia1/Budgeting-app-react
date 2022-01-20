import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
        <h1>Bank Account Total: number</h1>
        <div>Item Name: </div>
        <div>Date: </div>
        <div>Amount: {transaction.amount} </div>
        <div>From: </div>
        <div>Category: </div>    
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    );
}

export default TransactionDetails;