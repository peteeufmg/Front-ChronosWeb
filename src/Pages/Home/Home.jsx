import { DivContainer, DivTitle, DivLinks, Title, Link} from './style';
import React from "react";

function Home() {
    return (
            <DivContainer>
                <DivTitle>
                    <Title>chronos web</Title>
                </DivTitle>
                <DivLinks>
                    <Link href='#'>Seguidor</Link>
                    <Link href='#'>sumô</Link>
                </DivLinks>
            </DivContainer>
    )
}

export default Home;