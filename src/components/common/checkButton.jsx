import React from "react";

import style from "./checkButton.module.css";

export default function CheckButton({ checkerFunction }) {
    return (
        <div className="bottom-panel">
            <div className={style.icon}>
                <button className={style.button} onClick={checkerFunction}>
                    Ellenőrzés
                </button>
            </div>
        </div>
    );
}
