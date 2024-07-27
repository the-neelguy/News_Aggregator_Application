import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Search() {
    return (
        <Container className="d-flex flex-row justify-cdontent-start" style={{padding:"0%"}}>
            <Form>
                <Form.Control type="text" placeholder="Enter news topic" width="30%"></Form.Control>
            </Form>
            <Button style={{marginLeft:"1%"}}>Search</Button>
        </Container>
    )
}