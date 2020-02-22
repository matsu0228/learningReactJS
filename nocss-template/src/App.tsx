import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tailwind.css";
import Detail from "./views/Detail";
import Card from "./views/Card";

function App() {
  return (
    <div className="mx-auto">
      <Detail />
      <Card />
    </div>
  );
}

export default App;
