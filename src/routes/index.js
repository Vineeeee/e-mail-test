import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Page} from '../page/page.js'
import { PageSucess } from "../page/page-sucess.js"

export const AppRoutes = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Page/>}/>
            <Route exact path="/sucess" element={<PageSucess/>}/>
        </Routes>
    </BrowserRouter>
    )
}