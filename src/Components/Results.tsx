import { useState } from 'react';
import {Button, Card, Col, Container, Nav, Navbar} from 'react-bootstrap';
import {
    Chart,
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    Layer, Animate, Transform, Handlers, DropShadow, Gradient
  } from 'rumble-charts';

//Navbar came from https://react-bootstrap.github.io/components/navbar/
//Bootstrap card came from https://react-bootstrap.github.io/components/cards/
// Chart info came from https://www.npmjs.com/package/rumble-charts
interface stockResult{
    result: boolean;
    vals: Array<number>;
    tick:string;
}
export function Results({result, vals, tick}: stockResult): JSX.Element{
    const [subtitle, setSubTitle] = useState<string>("Today");
    const [graphShown, showGraph] = useState<boolean>(false);
    function updatePage(days:string, show:boolean){
        setSubTitle(days);
        showGraph(show);

    }
    const series = [{
        data: vals
      }];
    return(
        <Col>
            <h2>Stock Results</h2>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Button onClick={()=> updatePage("Today", false)}>Today</Button>
                    <Button onClick={()=> updatePage("10 Days", true)}>10 Days</Button>
                    <Button onClick={()=> updatePage("30 Days", true)}>30 Days</Button>
                    <Button onClick={()=> updatePage("6 Months", true)}>6 Months</Button>
                    <Button onClick={()=> updatePage("1 Year", true)}>1 Year</Button>
                </Nav>
                </Container>
            </Navbar>
            {result && <Card>
                <Card.Body>
                    <Card.Title>Ticker Symbol: {tick}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    {graphShown && <Chart width={600} height={250} series={series} minY={0} maxY={20}>
                        <Lines />
                        <Dots />
                    </Chart>}
                </Card.Body>
            </Card>}
        </Col>
    )
}