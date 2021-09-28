import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import {Selector} from './Components/Selector'
import { Results } from './Components/Results';

function App() {
  return (
    <Container className = "App">
      <h1>Stock Data</h1>
      <Row>
        <Selector></Selector>
        <Results></Results>
      </Row>
    </Container>
  );
}

export default App;