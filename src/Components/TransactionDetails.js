import { useState, useEffect } from "react";
import { useParams,} from "react-router-dom";
import axios from "axios";

const TransactionDetails = () => {
    const API = process.env.REACT_APP_API_URL;
    const[transaction, setTransaction] = useState([]);
    const { index } = useParams();

    useEffect(() => {
        axios.get(API+"/transactions/")
        .then((res) => setTransaction(res.data))

    }, [API, index])

    console.log(transaction);

    let bank = 0;
    const bankAccount = () => {
        for(let transactions of transaction){
            console.log(Number(transactions.amount))
            bank+=Number(transactions.amount)
            console.log(bank)
        }
    }
    bankAccount()
    return (
        <div className="budget-total">
                <p className="budget-amount">
                <strong>Budget total:</strong> ${bank}.00
                </p>
        </div>
    );
}

export default TransactionDetails;