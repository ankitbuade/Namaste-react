// how do we create nested element in react like css 
import React from "react";
import ReactDOM from "react-dom/client";

// Core react Element

// this is how core react is written and this is not optimum way to write react for it we use JSX

const Heading = (
<h1 className="ab" tabIndex="5">passing element inside component
</h1>);


// Creating Element using JSX
// JSX is not HTML It is like html syntax


const data = 1000


// components => everything inside react is component

const Headingcomponent = () =>(
   <div id="container"> 
   
    {data}
    
   <h1 className="abc">this is funtional component

   </h1>
   </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Headingcomponent/>)