import {Button, Col, Container, Nav, Navbar} from 'react-bootstrap';

//Navbar came from https://react-bootstrap.github.io/components/navbar/
export function Results(): JSX.Element{

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
        </Col>
    )
}