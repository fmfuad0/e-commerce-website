import React from "react";
import Hero from "../components/Hero.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import Policies from "../components/Policies.jsx";

export default function Home() {

    return (
        <div id={'home'}>
            <Hero/>
            <ProductsSection/>
            <Policies/>
        </div>
    );
}
