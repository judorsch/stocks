import { mean, variance } from 'mathjs';
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
    const [length, setLength] = useState<number>(10);
    const [today, setToday] = useState<boolean>(true);
    const [usedVals, setUsedVals] = useState<Array<number>>(vals);
    function updatePage(days:string, show:boolean, numDays:number){
        if(days === "Today"){
            setToday(true);
        }
        else if(days === "1 Year"){
            setToday(false);
            setLength(numDays);
            setUsedVals(vals);
        }
        else{
            setToday(false);
            setLength(numDays);
            setUsedVals(vals.slice((vals.length - numDays - 1), (vals.length - 1)));
        }
        setSubTitle(days);
    }
    return(
        <Col>
            <h2>Stock Results</h2>
            {url && <Card >
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
                    <Button onClick={()=> updatePage("Today", false, 0)}>Today</Button>
                    <Button onClick={()=> updatePage("10 Days", true, 10)}>10 Days</Button>
                    <Button onClick={()=> updatePage("30 Days", true, 30)}>30 Days</Button>
                    <Button onClick={()=> updatePage("6 Months", true, Math.floor(vals.length/2))}>6 Months</Button>
                    <Button onClick={()=> updatePage("1 Year", true, vals.length + 1)}>1 Year</Button>
                </Nav>
                </Container>
            </Navbar>}
            {result && <Card>
                <Card.Body>
                    <Card.Title>Ticker Symbol: {tick}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    {today && <Card.Body>
                        <Card.Text>
                        Value: {vals[vals.length - 1]}
                        </Card.Text>
                        <Card.Text>
                        Change: {(vals[vals.length - 2] - vals[vals.length - 1]).toFixed(2)}
                        </Card.Text>
                        <Card.Text>
                        Percent Change: {(100 * (vals[vals.length - 2] - vals[vals.length - 1]) / vals[vals.length - 2]).toFixed(2) + '%'}
                        </Card.Text>
                        </Card.Body>}
                    {!today && <Card.Body>
                        <Chart
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
                        data: usedVals
                        },
                    ]}
                    width={600}
                    >
                        <Layer
                        height="80%"
                        seriesIndex={[
                        0
                        ]}
                        width="70%"
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
                    </Chart>
                    <Card.Text>
                        Mean Value: {mean(usedVals).toFixed(2)}
                        </Card.Text>
                        <Card.Text>
                        Value's Variance: {variance(usedVals).toFixed(2)}
                        </Card.Text>
                    </Card.Body>}
                </Card.Body>
            </Card>}
        </Col>
    )
}