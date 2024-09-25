import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Equipes from "./Pages/Equipes";
import Button from "./Components/Button";
import Test from "./Pages/Test";
import Ranking from "./Pages/Ranking";
import Sorteio from "./Pages/Sorteio";
import Sumo from "./Pages/Sumo/Sumo";
import Apresentacao from "./Pages/Apresentacao";
import Cronometro from "./Pages/Cronometro";

const router = createBrowserRouter(
    createRoutesFromElements(
        //Colocar abaixo as rotas para as outras paginas do site
        // Exemplo: para a página do seguidor colocar -> <Route path="seguidor" element={<[Pagina]/>}/>
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/equipes" element={<Equipes />} />
            <Route path="/button" element={<Test />} />
            
            <Route path="/classificacao" element={<Ranking />} />
            <Route path="/sorteio" element={<Sorteio />} />

            <Route path="/sumo" element={<Sumo />} />

            <Route path="/test" element={<Test />} />
            <Route path="/cronometro" element={<Cronometro />} />

            <Route path="/apresentacao" element={<Apresentacao />} />
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />
}