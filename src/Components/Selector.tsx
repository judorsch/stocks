import {Button, Col} from 'react-bootstrap';

export function Selector(): JSX.Element{
    function test(){
        console.log("Hi")
    }
    return(
        <Col>
            <h2>Index Options</h2>
            <Button className = 'm-4' onClick={test}>DJIA</Button>
            <Button className = 'm-4'>S&P 500</Button>
            <Button className = 'm-4'>NASDAQ</Button>
            <Button className = 'm-4'>Russell 2000</Button>
            <Button className = 'm-4'>Gold and Silver</Button>
            <Button className = 'm-4'>10 Year Treasury Yield</Button>
            <Button className = 'm-4'>Other</Button>
        </Col>
    )
}