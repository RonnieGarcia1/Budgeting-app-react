import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                        <p>{transaction.date}</p>
                        <Link className="transaction-details" to="/transactions/details">{transaction.category}</Link>
                        <p>{transaction.amount}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}

export default Transactions;