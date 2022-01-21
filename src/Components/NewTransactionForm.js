import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewTransactionForm = () => {
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] =  useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value })
    };

    const addTransactions = (newTransaction) => {
        axios.post(`${API}/transactions`, newTransaction)
        .then(() => navigate("/transactions"))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransactions(transactions)
    };
    return (
        <div className="New">
            <h3>Add a new item</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Date">Date</label>
                <br/>
                <input
                    id="date"
                    value={transactions.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Date of transaction" required
                />
                <br/>
                <label htmlFor="ItemName">Item Name</label>
                <br/>
                <input
                    id="item_name"
                    value={transactions.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of item" required
                />
                <br/>
                <label htmlFor="Amount">Amount</label>
                <br/>
                <input
                    id="amount"
                    value={transactions.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Amount" required
                />
                <br/>
                <label htmlFor="From">From</label>
                <br/>
                <input
                    id="from"
                    value={transactions.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="From" required
                />
                <br/>
                <label htmlFor="Category">Category</label>
                <br/>
                <input
                    id="category"
                    value={transactions.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="enter a category" required
                />
                <br />
                <br/>
                <input type="submit" value="CREATE NEW ITEM" />
            </form>
        </div>
    )
}

export default NewTransactionForm;