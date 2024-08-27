// how do we create nested element in react like css

const nested = React.createElement("div",{id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"i am h1 tag")
    )
    );

// const heading = React.createElement("h1",{id: "heading"},"hello World")

  const root = ReactDOM.createRoot(document.getElementById("root"))

  root.render(nested)