import React from "react";
import "./App.css";
import Container from "./components/Container";
const env = import.meta.env;
function App() {
  return (
    <>
      <p className="mode-name">In {env.VITE_ENV} Enviroment</p>
      <Container />
    </>
  );
}

export default App;
