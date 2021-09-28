import {Button, Col} from 'react-bootstrap';

export function Selector(): JSX.Element{
    return(
        <Col>
            <h2>Index Options</h2>
            <Button>DOW</Button>
            <Button>S&P</Button>
            <Button>Nasdaq</Button>
            <Button>Russel</Button>
            <Button>Gold</Button>
            <Button>Treasury Bonds</Button>
            <Button>Other</Button>
        </Col>
    )
}