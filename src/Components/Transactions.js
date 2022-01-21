import { useEffect, useNavigate, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


const Transactions = () => {
    const [transaction, setTransactions] = useState([]);
    
    useEffect(() => {
        axios.get(API + "/transactions")
        .then((res) => {
            setTransactions(res.data)
        }).catch((error) => {
            throw error;
        });
    },  []);
    
    console.log(transaction) 


    return (
        <div className="transactions-1">
            <section>
                {transaction.map((transaction, index) => {
                    return (
                        <div className="transactions-2">
                            <br></br>
                        <div><strong>Item Name:</strong>{transaction.item_name}</div>
                        <div><strong>Date:</strong> {transaction.date}</div>
                        <div><strong>From:</strong> {transaction.from}</div>
                        <div><strong>Amount:</strong> {transaction.amount}</div>
                        <div><strong>Category:</strong> {transaction.category}</div>
                        <br></br>
                        <button className="delete-btn">Delete</button>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}

export default Transactions;