import {Button, Col} from 'react-bootstrap';

interface selection{
    showModal: (b:boolean)=>void,
    generateResults: (s1:string, s2:string)=>void,
}

export function Selector({showModal, generateResults}:selection): JSX.Element{
    function saveStock(type:string, symbol:string):void{
        generateResults(type, symbol);
    }
    function addStock(){
        showModal(true);
    }
    return(
        <Col>
            <h2>Index Options</h2>
            <Button className = 'm-4' onClick={() => {saveStock("index", "DJIA")}}>DJIA</Button>
            <Button className = 'm-4' onClick={() => {saveStock("index", "SPX")}}>S&P 500</Button>
            <Button className = 'm-4' onClick={() => {saveStock("index", "COMP")}}>NASDAQ</Button>
            <Button className = 'm-4' onClick={() => {saveStock("index", "RUT")}}>Russell 2000</Button>
            <Button className = 'm-4' onClick={() => {saveStock("index", "XAU")}}>Gold and Silver</Button>
            <Button className = 'm-4' onClick={() => {saveStock("bond", "BX/TMUBMUSD10Y")}}>10 Year Treasury Yield</Button>
            <Button className = 'm-4' onClick={addStock}>Other</Button>
        </Col>
    )
}