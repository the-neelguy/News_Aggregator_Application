import React from "react";
import { Card } from "react-bootstrap";
export default function NewsArticle(props) {
    return (
        <Card style={{ padding: "5%" }}>
            <Card.Img variant="top" src={props.url} />
            <Card.Title><b>{props.title}</b></Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Link href={props.read}>Read More</Card.Link>
        </Card>
    )
}