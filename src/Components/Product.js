import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import "../App.css";
import "./Product.css";

export default function Product(){

    const { id } = useParams();



    return(
        <div className='top-margin'>

ID: {id}
        </div>
    )
}
