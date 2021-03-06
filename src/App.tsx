import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import {Selector} from './Components/Selector'
import { Results } from './Components/Results';
import { StockPicker } from './Components/StockPicker';
import { getStock, getStockURL } from './utilities/scrape';

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const [url, setUrl] = useState<boolean>(false);
  const [type, setType] = useState<string>("Type");
  const [tick, setTick] = useState<string>("Ticker Symbol");
  const [vals, setVals] = useState<Array<number>>([]);
  const [actualURL, setActualURL] = useState<string>("");
  function showResults(typ:string, symb:string):void{
    setActualURL(getStockURL(typ, symb));
    setTick(symb.toUpperCase());
    setVals(getStock(typ, symb));
    //have the results object appear
    //pass info to results
  }
  return (
    <Container className = "App">
      <h1>Stock Data</h1>
      <Row>
        <Selector showModal ={setVisible} generateResults = {showResults} result = {result} showResult = {setResult} url ={url} setUrl ={setUrl}></Selector>
        <Results result = {result} vals = {vals} tick = {tick} url={url} actualURL ={actualURL}></Results>
        <StockPicker visible = {visible} setVisible ={setVisible} generateResults = {showResults} result = {result} showResult = {setResult} url ={url} setUrl ={setUrl}></StockPicker>
      </Row>
    </Container>
  );
}

export default App;