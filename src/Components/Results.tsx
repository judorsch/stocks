import {Col, Container, Nav, Navbar} from 'react-bootstrap';

//Navbar came from https://react-bootstrap.github.io/components/navbar/
export function Results(): JSX.Element{
    return(
        <Col>
            <h2>Stock Results</h2>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Today</Nav.Link>
                    <Nav.Link href="#home">10 Days</Nav.Link>
                    <Nav.Link href="#features">30 Days</Nav.Link>
                    <Nav.Link href="#pricing">6 Months</Nav.Link>
                    <Nav.Link href="#pricing">1 Year</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </Col>
    )
}