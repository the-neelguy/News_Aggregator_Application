import React from "react";
import {Stack, Container } from "react-bootstrap";
import NewsArticle from "./NewsArticle"

export default function News({arr}) {
    return (
        <Container style={{ marginTop: "4%" }}>
            <Stack gap={4}>
            {arr.map((val,i)=>{
                return <NewsArticle title={val.title} description={val.description} url={val.urlToImage} link={val.read}></NewsArticle>
            })}
            </Stack>
        </Container>
    )
}