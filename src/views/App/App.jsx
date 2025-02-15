import React from 'react'
import MainTemplate from "../../components/MainTemplate/MainTemplate.jsx"
import Home from "../Home/Home.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Season2024 from "../Season2024/Season2024.jsx";
import Driver2024 from "../Driver2024/Driver2024.jsx";
import RoundDetail from "../RoundDetail/RoundDetail.jsx";
import Logo from "../../assets/images/F1_logo.png"

function App() {

    const nav= [
        {url: "/", text: "Home", exact: true},
        { url: "/Season2024", text: "Season 2024", exact: true},
        { url: "/Driver2024", text: "Driver 2024", exact: true},]

    return (
        <BrowserRouter>
            <MainTemplate
                navItems={nav}
                logo={Logo}
                >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Season2024" element={<Season2024 />} />
                    <Route path="/Driver2024" element={<Driver2024 />} />
                    <Route path="/Season2024/:round" element={<RoundDetail />} />
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    );
}

export default App;