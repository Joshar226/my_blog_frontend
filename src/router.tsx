import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/HomeView";
import AdminView from "./views/AdminView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomeView/>} index/>
                </Route>

                <Route path="/admin" element={<AdminView/>}/>
            </Routes>
        </BrowserRouter>
    )
}