import { NavLink } from "react-router-dom";
import { Container, NavTitle, NavLinks } from "./style";

export default function NavBar() {
    return(
        <div>
            <Container>
                <NavTitle>
                    <NavLink to="/">
                        Chronos Web
                    </NavLink>
                </NavTitle>
                <NavLinks>
                    <NavLink to="/cronometro">Cronomêtro</NavLink>
                    <NavLink to="/equipes">Equipes</NavLink>
                </NavLinks>
            </Container>
        </div>
    )
}