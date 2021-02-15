import React from "react";

export default function About() {
    const software = [
        { name: "React", url: "https://reactjs.org/" },
        { name: "Snowpack", url: "https://www.snowpack.dev/" },
        { name: "Reach Router", url: "https://reach.tech/router/" },
        { name: "Chance", url: "https://chancejs.com/" },
        { name: "Iconify", url: "https://iconify.design/" }
    ];
    return (
        <div>
            <h2>Open-source software used in this project</h2>
            <ol>
                {software.map((e, index) => (
                    <li key={index}>
                        <a href={e.url} target="_blank">
                            {e.name}
                        </a>
                    </li>
                ))}
            </ol>
            <div className="bottom-panel">{new Date().getFullYear()}</div>
        </div>
    );
}
