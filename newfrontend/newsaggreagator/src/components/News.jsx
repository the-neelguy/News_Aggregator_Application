import React from "react";
import {Stack, Container } from "react-bootstrap";
import NewsArticle from "./NewsArticle"

export default function News() {
    return (
        <Container style={{ marginTop: "4%" }}>
            <Stack gap={4}>
            <NewsArticle></NewsArticle>
            <NewsArticle></NewsArticle>
            <NewsArticle></NewsArticle>
            </Stack>
        </Container>
    )
}