import { DivContainer, DivTitle, DivLinks, Title, Link} from './style';
import React from "react";

function Home() {
    return (
            <DivContainer>
                <DivTitle>
                    <Title>chronos web</Title>
                </DivTitle>
                <DivLinks>
                    <Link href='/classifcacao'>Classificação</Link>
                    <Link href='/equipes'>Equipes</Link>
                    <Link href='/sorteio'>Sorteios</Link>
                </DivLinks>
            </DivContainer>
    )
}

export default Home;