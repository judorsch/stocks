import {Button, Card, Col, Container, Nav, Navbar} from 'react-bootstrap';

//Navbar came from https://react-bootstrap.github.io/components/navbar/
//Bootstrap card came from https://react-bootstrap.github.io/components/cards/

interface stockResult{
    result: boolean;
}
export function Results({result}: stockResult): JSX.Element{

    function test(){
        console.log("hi");
    }
    return(
        <Col>
            <h2>Stock Results</h2>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Button onClick={test}>Today</Button>
                    <Button onClick={test}>10 Days</Button>
                    <Button onClick={test}>30 Days</Button>
                    <Button onClick={test}>6 Months</Button>
                    <Button onClick={test}>1 Year</Button>
                </Nav>
                </Container>
            </Navbar>
            {result && <Card>
                <Card.Body>
                    <Card.Title>Stock Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Today</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>}
        </Col>
    )
}