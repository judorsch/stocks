import { useState } from 'react';
import {Button, Card, Col, Container, Nav, Navbar} from 'react-bootstrap';
import {
    Chart,
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    Layer, Animate, Transform, Handlers, DropShadow, Gradient
  } from 'rumble-charts';

//Navbar came from https://react-bootstrap.github.io/components/navbar/
//Bootstrap card came from https://react-bootstrap.github.io/components/cards/
// Chart info came from https://rumble-charts.github.io/?path=/docs/components-graphics-lines--story-1
interface stockResult{
    result: boolean;
    vals: Array<number>;
    tick:string;
    url:boolean;
    actualURL: string;
}
export function Results({result, vals, tick, url, actualURL}: stockResult): JSX.Element{
    const [subtitle, setSubTitle] = useState<string>("Today");
    const [graphShown, showGraph] = useState<boolean>(false);
    function updatePage(days:string, show:boolean){
        setSubTitle(days);
        showGraph(show);

    }
    return(
        <Col>
            <h2>Stock Results</h2>
            {url && <Card>
                <Card.Body>
                    <Card.Title>Ticker Symbol: {tick}</Card.Title>
                    <Card.Text>
                    To access data on your selected stock from the last year, click <a href={actualURL}>here.</a>  The data will be downloaded to your computer.  If the CSV file that is downloaded is empty, you did not enter either the correct type, ticker symbol, or that stock is not supported.
                    </Card.Text>
                </Card.Body>
            </Card>}
            {result && <Navbar bg="primary" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Button onClick={()=> updatePage("Today", false)}>Today</Button>
                    <Button onClick={()=> updatePage("10 Days", true)}>10 Days</Button>
                    <Button onClick={()=> updatePage("30 Days", true)}>30 Days</Button>
                    <Button onClick={()=> updatePage("6 Months", true)}>6 Months</Button>
                    <Button onClick={()=> updatePage("1 Year", true)}>1 Year</Button>
                </Nav>
                </Container>
            </Navbar>}
            {result && <Card>
                <Card.Body>
                    <Card.Title>Ticker Symbol: {tick}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    {graphShown && <Chart
                    height={300}
                    scaleX={{
                        paddingEnd: 0,
                        paddingStart: 0
                    }}
                    scaleY={{
                        paddingTop: 10
                    }}
                    series={[
                        {
                        data: vals
                        },
                    ]}
                    width={800}
                    >
                        <Layer
                        height="80%"
                        seriesIndex={[
                        0
                        ]}
                        width="90%"
                    >
                        <Lines/>
                        <Ticks
                        axis="y"
                        labelAttributes={{
                            fontFamily: 'sans-serif',
                            x: -5
                        }}
                        labelStyle={{
                            dominantBaseline: 'middle',
                            textAnchor: 'end'
                        }}
                        lineLength="100%"
                        lineStyle={{
                            stroke: 'rgba(255,255,255,0.3)'
                        }}
                        />
                    </Layer>
                    </Chart>}
                </Card.Body>
            </Card>}
        </Col>
    )
}