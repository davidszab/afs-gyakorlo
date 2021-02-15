import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import tickCircle from "@iconify-icons/teenyicons/tick-circle-solid";
import xCircle from "@iconify-icons/teenyicons/x-circle-solid";
import Chance from "chance";
import style from "./result.module.css";

function getMessage(success) {
    const successMessages = ["Szép munka!", "Ügyes!", "Nagyon jó!", "Helyes!"];
    const failureMessages = ["Majd legközelebb!", "Nem jó!", "Helytelen!"];
    const max = success
        ? successMessages.length - 1
        : failureMessages.length - 1;
    const c = new Chance();
    const index = c.integer({ min: 0, max });
    return success ? successMessages[index] : failureMessages[index];
}

function arrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length - 1; i++) {
        string += array[i];
        string += ", ";
    }
    string += array[array.length - 1];
    return string;
}

function getDetailsText(success, otherSolutions) {
    let detailsText = "";
    if (success && otherSolutions && otherSolutions.length === 1)
        detailsText = `Másik megoldás: ${otherSolutions[0]}`;
    else if (success && otherSolutions && otherSolutions.length > 1)
        detailsText = `Más megoldások: ${arrayToString(otherSolutions)}`;
    else if (!success && otherSolutions && otherSolutions.length === 1)
        detailsText = `A megoldás: ${otherSolutions[0]}`;
    else if (!success && otherSolutions && otherSolutions.length > 1)
        detailsText = `A megoldások: ${arrayToString(otherSolutions)}`;
    return detailsText;
}

export default function Result({ success, otherSolutions, handleNext }) {
    if (success) document.getElementById("sound_correct").play();
    if (!success) document.getElementById("sound_incorrect").play();
    return (
        <div
            className={`bottom-panel ${
                success ? style.success : style.failure
            }`}>
            <div className="flex">
                <div className={style.icon}>
                    <Icon icon={success ? tickCircle : xCircle} />
                </div>
                <div className={style.text}>
                    <h2>{getMessage(success)}</h2>
                    <p>{getDetailsText(success, otherSolutions)}</p>
                </div>
            </div>
            <div className={style.buttonDiv}>
                <button className={style.button} onClick={handleNext} autoFocus>
                    Tovább
                </button>
            </div>
        </div>
    );
}
