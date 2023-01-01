import React, {Fragment} from 'react';
// import Menu from "./components/menu";
// import banner from "../images/banner.svg";
// import "../css/style.css";
// import Index from "./index";
// import Main from "./main";
import AppRoute from "./route/AppRoute";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        // <div className="App">
        //     <Menu/>
        //     <img src={banner} alt=""/>
        //     <button className="normal-btn btn"></button>
        // </div>

        <BrowserRouter >
            <AppRoute/>
        </BrowserRouter>
    );
}
export default App;

