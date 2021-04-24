import React from "react";
import "./styles.css";
import Rahul from "./components/Rahul";
import Shaib from "./components/Shaib";

export default function App() {
  return (
    <div className="App">
      <Rahul gun="AK 47" />
      <Shaib gun="AK 75" />
    </div>
  );
}
