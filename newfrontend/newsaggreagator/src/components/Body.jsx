import { Container } from "react-bootstrap"
import React from "react"
import Header from "./Header"
import Search from "./Search"
import News from "./News"

export default function Body() {
    return (
        <Container className="d-flex flex-column mb-xs-8 mb-lg-4" style={{marginLeft:"3%",marginRight:"0%", marginTop:"2%" }}>
            <Container style={{ padding: "0%" }}>
                <Header show="Lastest News" />
                <Search></Search>
                <News></News>
            </Container>
        </Container>
    )
}