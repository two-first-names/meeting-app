import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Board} from "./components/Board";
import Container from "react-bootstrap/Container";

function App() {
  return (
      <Container>
        <Board/>
      </Container>
  );
}

export default App;
