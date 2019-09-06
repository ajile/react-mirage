import * as React from "react";
import { render } from "react-dom";
import { startMirage } from "./mirage";
import { Users } from "./pages/Users";
import "./styles.css";

startMirage({ environment: "development" });

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <Users />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
