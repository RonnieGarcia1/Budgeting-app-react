import { useEffect, useState } from "react";
import axios from "axios";
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

    const handleDelete = () => {
       console.log("trigger");
    }
    console.log(details) 
    return (
        <div className="transactions-1">
            <section>
                {details.map((details, index) => {
                    return (
                        <div className="details-2">
                           <strong>Summary</strong>
                           <br></br>
                           <br></br>
                        <p><strong>Item:  </strong>{details.item_name}</p>
                        <p><strong>Date: </strong>{details.date}, 2022</p>
                        <p><strong>From: </strong> {details.from}</p>
                        <p><strong>Amount:</strong> - ${details.amount}.00</p>
                        <Button onClick={handleDelete}variant="outlined">Delete</Button>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}
export default Details;