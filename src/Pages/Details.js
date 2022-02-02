import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;


const Details = () => {
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then((res) => {
            setDetails(res.data)
        }).catch((error) => {
            throw error;
        });
    },  []);

    return (
        <div className="transactions-1">
            <section>
                {details.map((details, index) => {
                    return (
                        <Link to={`/transactions/${index}`}>
                        <div className="details-2">
                            
                           <strong>Summary</strong>
                           <br></br>
                           <br></br>
                        <p><strong>Date: </strong>{details.date}, 2022</p>
                        <p><strong>From: </strong> {details.from}</p>
                        <p><strong>Amount:</strong>  ${details.amount}.00</p>
                        </div>
                        </Link>
                    )
                })}
            </section>
        </div>
    );
}
export default Details;