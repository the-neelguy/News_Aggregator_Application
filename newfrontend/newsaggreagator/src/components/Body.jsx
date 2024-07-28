import { Container } from "react-bootstrap"
import React, { useEffect, useState } from "react"
import Header from "./Header"
import Search from "./Search"
import News from "./News"
import axios from "axios"

export default function Body() {
    const [news, setNews] = useState([])

    console.log(news)

    async function getData() {
        const headers = { "Content-Type": "application/json" };
        const url = "https://newsapi.org/v2/everything";

        // Calculate the previous day's date
        const previousDay = new Date();
        previousDay.setDate(previousDay.getDate() - 1);
        const formattedPreviousDay = previousDay.toLocaleDateString("sv-SE");
        
        const params = {
            apiKey: "64ec664e7dba4cf096f5b26d539eeed8",
            sortBy: "popularity",
            q: "oil",
            from: formattedPreviousDay
        };
        try {
            const response = await axios.get(url, { params, headers });
            console.log(params, response.data);
            setNews(response.data.articles);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getData();
    }, [JSON.stringify(news)])

    return (
        <Container className="d-flex flex-column mb-xs-8 mb-lg-4" style={{ marginLeft: "3%", marginRight: "0%", marginTop: "2%" }}>
            <Container style={{ padding: "0%" }}>
                <Header show="Lastest News" />
                <Search></Search>
                <News arr={news}></News>
            </Container>
        </Container>
    )
}