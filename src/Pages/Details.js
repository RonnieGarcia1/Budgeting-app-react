import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const API = process.env.REACT_APP_API_URL;


const Details = () => {
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        axios.get(API + "/transactions")
        .then((res) => {
            setDetails(res.data)
        }).catch((error) => {
            throw error;
        });
    },  []);
    
    console.log(details) 
    
    return (
        <div className="transactions-1">
            <section>
                {details.map((details, index) => {
                    return (
                        <div className="details-2">
                           <strong>Summary</strong>
                        <p><strong>Date: </strong>{details.date}, 2022</p>
                        <Link className="details" to="/transactions/details">{details.category}</Link>
                        <p><strong>From: </strong> {details.from}</p>
                        <p><strong>Amount:</strong> -${details.amount}.00</p>
                        <Button variant="outlined">Delete</Button>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}
export default Details;