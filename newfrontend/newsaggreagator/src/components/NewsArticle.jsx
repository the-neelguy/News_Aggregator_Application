import React from "react";
import { Card } from "react-bootstrap";
export default function NewsArticle()
{
    return (
        <Card className="" style={{padding:"5%"}}>
            <Card.Title><b>Test 1</b></Card.Title>
            <Card.Text>NDFHSDIFNHSDFHD</Card.Text>
            <Card.Link href="#">Read More</Card.Link>
        </Card>
    )
}