import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditTransactions(){
    const navigate = useNavigate();
    const {index} = useParams();
    const API = process.env.REACT_APP_API_URL;
    const [transaction, setTransaction] =  useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then((res) => {
            setTransaction(res.data)
        }).catch((error) => {
            throw error;
        });
    },  );

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    };
    const handleSubmit = (event) => {
        console.log(transaction)
        event.preventDefault();
        axios.put(`${API}/transactions/${index}`, transaction)
        .then(() => navigate(`/transactions/${index}`))
        .catch((err) =>
        console.log(err)
        )
    };

    return (
        <div className="New">
            <h3>Edit item</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Date">Date</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Date of transaction" required
                />
                <label htmlFor="ItemName">Item Name</label>
                <input
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of item" required
                />
                <label htmlFor="Amount">Amount</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="amount" required
                />
                <label htmlFor="From">From</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="From" required
                />
                <label htmlFor="Category">Category</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="enter a category" required
                />
                <input type="submit" /> 
            </form>
        </div>
    )
}

export default EditTransactions;