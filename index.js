import React from "react";
import ReactDOM from "react-dom";

function Hello(props) {
    return <h1 class="hi">Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);