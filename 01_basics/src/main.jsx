import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Try from "./Try.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

<>
  <App />
  <Try />
  {(2+2 === 4) ? console.log(true) : console.log(false)}
</>

);
