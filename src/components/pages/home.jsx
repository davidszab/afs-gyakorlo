import React from "react";
import Link from "../common/customLink";
import Footer from "../common/footer";

export default function Home() {
    const exercises = [
        { name: "Számok (0-99)", path: "szamok-0-99" },
        { name: "Mennyi az idő?", path: "mennyi-az-ido" }
    ];
    return (
        <React.Fragment>
            <h1>Interaktív gyakorlófeladatok</h1>
            <ol>
                {exercises.map((e, index) => (
                    <li key={index}>
                        <Link to={e.path}>{e.name}</Link>
                    </li>
                ))}
            </ol>
            <Footer />
        </React.Fragment>
    );
}
