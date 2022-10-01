import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import MicroFrontendsContainer from "./MicroFrontendsContainer";

function App() {
  return (
    <div className="App">
      <p>This is the container app</p>
      <Container>
        <MicroFrontendsContainer />
      </Container>
    </div>
  );
}

export default App;
