import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Home from "./components/pages/home";
import Numbers099 from "./components/pages/numbers099";
import WhatTimeIsIt from "./components/pages/whatTimeIsIt";
import About from "./components/pages/about";

export default function App() {
    return (
        <Router basepath="%BASE_URL%">
            <Home path="/" />
            <Numbers099 path="/szamok-0-99" />
            <WhatTimeIsIt path="/mennyi-az-ido" />
            <About path="/about" />
        </Router>
    );
}
