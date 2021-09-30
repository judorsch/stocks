import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface addStock{
    visible:boolean,
    setVisible: (b:boolean) =>void,
    generateResults: (s1:string, s2:string)=>void,
    result: boolean,
    showResult: (b:boolean) =>void
}

export function StockPicker({visible, setVisible, generateResults, result, showResult}: addStock): JSX.Element{
    const [type1, setType1] = useState<string>("Type");
    const [tick1, setTick1] = useState<string>("Ticker Symbol");
    function saveStock(){
        showResult(true);
        generateResults(type1, tick1);
        setVisible(false);
    }
    const hide = ()=> setVisible(false);
    return(<Modal show={visible} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Enter New Stock Ticker</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="addCardForm.promptTextArea">
                <Form.Label>Type: index/etf/bond/company</Form.Label>
                <Form.Control as="textarea" rows={3} value={type1} onChange={(ev: React.ChangeEvent<HTMLInputElement>)=>setType1(ev.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addCardForm.answerTextarea">
                <Form.Label>Ticker Symbol</Form.Label>
                <Form.Control as="textarea" rows={3} value={tick1} onChange={(ev: React.ChangeEvent<HTMLInputElement>)=>setTick1(ev.target.value)}/>
            </Form.Group>
        </Form>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>Close</Button>
          <Button variant="primary" onClick={saveStock}>Save changes</Button>
        </Modal.Footer>
      </Modal>)
}