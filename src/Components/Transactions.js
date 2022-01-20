import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";

const API = process.env.React_APP_API_URL;

const Transactions = () => {
    const [transaction, setTransactions] = useState([]);

    useEffect(() => {
       axios.get(API + "/transactions")
         .then((res) => {
           setTransactions(res.data)
            console.log(res.data);
      }).catch((error) => {
          throw error;
        });
    },  []);
    return (
        <div className="Transactions">
            <section>
                <table>
                    <thead>
                        <tbody>
                            {transaction.map((transaction, index) => {
                                return <Transaction key={index} transaction={transaction} index={index} />;
                            })}
                        </tbody>
                    </thead>
                </table>
            </section>
        </div>
    );
}

export default Transactions;