import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Home } from "./Components/Home/Home.jsx";
import { PrincipalCities } from "./Components/PrincipalCities/PrincipalCities.jsx";
import { Weather } from "./Components/Weather/Weather.jsx";
import Barcelona from "./Components/PrincipalCities/Barcelona/Barcelona.jsx";
import DatosBarcelona from "./Components/PrincipalCities/Barcelona/DatosBarcelona.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/principal-cities" element={<PrincipalCities/>}></Route>
        <Route exact path="/weather" element={<Weather/>}></Route>
        <Route exact path="/barcelona" element={<Barcelona/>}></Route>
        <Route exact path="/barcelona/datos" element={<DatosBarcelona/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
