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
import Modal from "./Pages/Modal";
import ModalS from "./Pages/ModalS";
import ModalEditar from "./Pages/ModalEditar";

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

            <Route path="/test" element={<Test />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/modals" element={<ModalS />} />
            <Route path="/modaled" element={<ModalEditar />} />
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />
}