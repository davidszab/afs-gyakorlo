import React, { useRef } from "react";
import NumberExercise from "../../utility/tasks/numbers";
import Lesson from "../lesson/lesson";

export default function Numbers099() {
    const tasks = useRef(NumberExercise());
    return <Lesson tasks={tasks.current} />;
}
