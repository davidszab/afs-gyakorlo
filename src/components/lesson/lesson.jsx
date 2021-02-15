import React, { useState, useRef } from "react";
import ProgressBar from "../common/progressBar";
import TaskWrapper from "../common/taskWrapper";
import Result from "../common/result";
import CheckButton from "../common/checkButton";
import { TaskTypes, InputTypes } from "../../utility/task";
import TextInput from "../common/input/textInput";
import Choice from "../common/input/choice";
import Finish from "./finish";

function twoDigits(number) {
    if (number < 10) return `0${number}`;
    else return number.toString();
}

export default function Lesson({ tasks }) {
    const [currentTask, setCurrentTask] = useState(0);
    const [hasBeenChecked, setHasBeenChecked] = useState(false);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [otherSolutions, setOtherSolutions] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const inputRef = useRef(undefined);

    if (currentTask === -1)
        return (
            <Finish correctAnswers={correctAnswers} answers={tasks.length} />
        );
    const task = tasks[currentTask];

    const getTaskModule = () => {
        switch (task.type) {
            case TaskTypes.TEXT:
                return <h1>{task.data.content}</h1>;
            case TaskTypes.TIME:
                return (
                    <h1>
                        {twoDigits(task.data.hour)}:
                        {twoDigits(task.data.minute)}
                    </h1>
                );
            default:
                return null;
        }
    };

    const getInputModule = () => {
        switch (task.input) {
            case InputTypes.TEXT:
                return <TextInput ref={inputRef} handleKeyPress={keyPress} />;
            case InputTypes.CHOICE:
                return (
                    <Choice
                        ref={inputRef}
                        options={task.data.options}
                        hasBeenChecked={hasBeenChecked}
                    />
                );
        }
    };

    const keyPress = (event) => {
        if (event.key == "Enter") checker();
    };

    const nextTask = () => {
        setHasBeenChecked(false);
        if (task.input === InputTypes.TEXT) {
            inputRef.current.value = "";
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
        if (currentTask < tasks.length - 1) setCurrentTask(currentTask + 1);
        else setCurrentTask(-1);
    };

    const checker = () => {
        if (hasBeenChecked) return null;

        const userInput = inputRef.current;
        if (!userInput) return null;
        if (!userInput.value) return null;
        if (task.input == InputTypes.TEXT) inputRef.current.disabled = true;
        let inputValue;
        if (task.input == InputTypes.CHOICE) {
            inputValue = task.data.options[userInput.value];
        } else {
            inputValue = userInput.value;
        }
        const success = tasks[currentTask].data.solutions.includes(inputValue);
        setWasSuccessful(success);
        if (success) setCorrectAnswers(correctAnswers + 1);
        setOtherSolutions(task.data.solutions.filter((e) => e != inputValue));
        setHasBeenChecked(true);
    };
    return (
        <React.Fragment>
            <ProgressBar progress={(currentTask / tasks.length) * 100} />
            <TaskWrapper>
                <div style={{ textAlign: "center" }}>
                    {getTaskModule()}
                    {getInputModule()}
                </div>
            </TaskWrapper>
            {!hasBeenChecked && <CheckButton checkerFunction={checker} />}
            {hasBeenChecked && (
                <Result
                    handleNext={nextTask}
                    success={wasSuccessful}
                    otherSolutions={otherSolutions}
                />
            )}
        </React.Fragment>
    );
}
