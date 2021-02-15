import React, { useRef } from "react";
import TimeExercise from "../../utility/tasks/time";
import Lesson from "../lesson/lesson";

export default function WhatTimeIsIt() {
    const tasks = useRef(TimeExercise(12));
    return <Lesson tasks={tasks.current} />;
}
