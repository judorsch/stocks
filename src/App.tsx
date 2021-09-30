import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import {Selector} from './Components/Selector'
import { Results } from './Components/Results';
import { StockPicker } from './Components/StockPicker';
import { getStock } from './utilities/scrape';

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const [type, setType] = useState<string>("Type");
  const [tick, setTick] = useState<string>("Ticker Symbol");
  function showResults(typ:string, symb:string){
    const nums = getStock(typ, symb);
    //run the get request
    //have the results object appear
    //pass info to results
  }
  return (
    <Container className = "App">
      <h1>Stock Data</h1>
      <Row>
        <Selector showModal ={setVisible}></Selector>
        <Results></Results>
        <StockPicker visible = {visible} setVisible ={setVisible} generateResults = {showResults}></StockPicker>
      </Row>
    </Container>
  );
}

export default App;