import React from "react";
import "./Home.css"
import { Container } from "./style";
import { Frame } from "./style";
import { Item } from "./style";
import { Title } from "./style";

function Home() {
    return (
    <>
        <Container>
            <Title>CHRONOS WEB</Title>
            <Frame>
                <Item href="#">SEGUIDOR</Item>
                <Item href="#">SUMÔ</Item>
            </Frame>     
        </Container>
    </>
    )
}

export default Home;