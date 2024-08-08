import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Ranking from "./Pages/Ranking";
import Cronometro from "./Pages/Cronometro";
const router = createBrowserRouter(
    createRoutesFromElements(
        //Colocar abaixo as rotas para as outras paginas do site
        // Exemplo: para a página do seguidor colocar -> <Route path="seguidor" element={<[Pagina]/>}/>
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/classificacao" element={<Ranking />} />
            <Route path="/test" element={<Test />} />
            <Route path="/cronometro" element={<Cronometro />} />
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />
}