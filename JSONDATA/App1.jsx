import React from "react";
import JSON from "./Student.json";
import Details from "./Details";
import "./style.css";

const App1=()=>{
    return(
        <div>
            <Details payload={JSON}/>
        </div>
    )
}
export default App1;