import React from "react";
import { navigateTo } from "../common/customLink";
import { InlineIcon } from "@iconify/react";
import starOutline from "@iconify-icons/teenyicons/star-outline";
import starSolid from "@iconify-icons/teenyicons/star-solid";
import style from "./finish.module.css";

function howManyStars(percent) {
    if (percent < 21) return 1;
    if (percent < 41) return 2;
    if (percent < 61) return 3;
    if (percent < 90) return 4;
    else return 5;
}

function getStars(percent) {
    const filledStars = howManyStars(percent);
    const array = [];
    for (let i = 0; i < 5; i++) {
        if (i < filledStars) array.push(true);
        else array.push(false);
    }
    return array;
}

function Star({ isFilled }) {
    return <InlineIcon icon={isFilled ? starSolid : starOutline} />;
}

export default function Finish({ correctAnswers, answers }) {
    const percent = (correctAnswers / answers) * 100;
    window.getStars = getStars;
    return (
        <React.Fragment>
            <h1>Megcsináltad!</h1>
            <div className="task-wrapper">
                <div className={style.wrapper}>
                    <div className={style.stars}>
                        {getStars(percent).map((e, index) => (
                            <Star isFilled={e} key={`star${index}`} />
                        ))}
                    </div>
                    <h1>{percent.toFixed(2)}%</h1>
                    <table className={style.table}>
                        <tbody>
                            <tr>
                                <td>Megválaszolt kérdések:</td>
                                <td className="text-right">{answers}</td>
                            </tr>
                            <tr>
                                <td>Helyes válaszok:</td>
                                <td className="text-right">{correctAnswers}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`bottom-panel ${style.buttonDiv}`}>
                <button onClick={() => navigateTo("")}>Tovább</button>
            </div>
        </React.Fragment>
    );
}
