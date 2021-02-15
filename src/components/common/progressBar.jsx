import React from "react";
import { navigateTo } from "./customLink";
import { InlineIcon } from "@iconify/react";
import xOutline from "@iconify-icons/teenyicons/x-circle-outline";

import style from "./progressBar.module.css";

export default function ProgressBar({ progress }) {
    if (!progress || progress < 0) progress = 0;
    else if (progress > 100) progress = 100;

    const handleClick = () => {
        navigateTo("");
    };

    return (
        <div className={style.box}>
            <button
                className={style.button}
                aria-label="Kilépés"
                onClick={handleClick}>
                <InlineIcon icon={xOutline} />
            </button>
            <div className={style.barWrapper}>
                <div className={style.bar}>
                    <div className={style.barBack}></div>
                    <div
                        className={style.barFront}
                        style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}
