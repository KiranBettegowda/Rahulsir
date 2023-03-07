import React from "react";
import STYLE from "./jspiders.module.css";

const Jspiders=()=>{
    return(
        <div id={STYLE.main}>
            <ul>
                <li>
            <img src="https://tse1.mm.bing.net/th?id=OIP.khuL3y8SNtGw6X0ARlNopQHaDU&pid=Api&P=0" alt="logo" />
           </li>
           <li>
            <a href="home">Home</a>
           </li>
           <li>
            <a href="courses">Courses</a>
           </li>
           <li>
            <a href="batches">Batches</a>
           </li>
           <li>
            <a href="carporates">Carporates</a>
           </li>
           <li>
            <a href="contact">Contact</a>
           </li>
           <li>
            <a href="placements">Placements</a>
           </li>
           <li>
            <button><a href="login">Login</a></button>
           </li>
           <li>
            <button><a href="signup">Sign Up</a></button>
           </li>
            </ul>
        </div>

    )
}
export default Jspiders;