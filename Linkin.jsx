import React from "react";
import STYLE from "./linkin.module.css";

const Linkin=()=>{
    return(
        <div id={STYLE.maindiv}>
             <ul>
                <li>
            <img src="https://tse4.mm.bing.net/th?id=OIP.xHACKpJjUVRiAVy69AUqRgHaEK&pid=Api&P=0" alt="logo" />
            </li>
                <li>
                    <a href="discover">Discover</a>
                </li>
                <li>
                    <a href="people">people</a>
                </li>
                <li>
                    <a href="learning">Learning</a>
                </li>
                <li>
                    <a href="goals">Goals</a>
                </li>
                <li>
                    <a href="join">Join Now</a>
                </li>
                <li>
                <button><a href="signin">Signin</a></button>
                </li>
            </ul>
        </div>
    )
}
export default Linkin;











