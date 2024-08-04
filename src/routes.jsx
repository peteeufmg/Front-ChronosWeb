import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Button from "./Components/Button";
import Test from "./Pages/Test";

const router = createBrowserRouter(
    createRoutesFromElements(
        //Colocar abaixo as rotas para as outras paginas do site
        // Exemplo: para a página do seguidor colocar -> <Route path="seguidor" element={<[Pagina]/>}/>
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<Test />} />
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />
}