import React from "react";
import STYLE from "./hotstar.module.css";

const Hotstar = ()=>{
    return(
           <div id={STYLE.maindiv}>
            <ul>
                <li><img src="https://tse2.mm.bing.net/th?id=OIP.D0wK0UDC_NqilQsbwm7kwAAAAA&pid=Api&P=0" alt="logo" /></li>
                <li><a href="tutorials">Tutorials</a></li>
                <li><a href="references">References</a></li>
                <li><a href="exercise">Exercise</a></li>
                <li><a href="signup">Sign Up</a></li>
                <li><a href="bootcamp">Bootcamp</a></li>
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <button id={STYLE.button1}>pro</button>
                <button  id={STYLE.button2}>Get Certified</button>
                <button id={STYLE.button3}>Create Website</button>
                <button id={STYLE.button4}>Log in</button>
            </ul>
           </div>
    )
}
export default Hotstar;









