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
    return (
        <div>
        <h1>Bank Account Total: number</h1>
        </div>
    );
}

export default TransactionDetails;