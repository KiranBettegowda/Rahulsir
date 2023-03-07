import React from "react";
import STYLE from "./abc.module.css";

const Abc=()=>{
    return(
        <div id={STYLE.main}>
            <ul>
          <li>
            <h1>Flipkart</h1>
         </li>
          <li>
          <input type="text" name="text" placeholder="Search for products,brands and more" />
          </li>
          <li>
          <a href="login">Login</a>
          </li>
            <li>
             <a href="seller"> Become a seller</a>
            </li>
            <li>
              <a href="more">More</a>
              </li>
            <li>
            <a href="cart">Cart</a>
            </li>
          </ul>
        </div>
        
    )
}
export default Abc;