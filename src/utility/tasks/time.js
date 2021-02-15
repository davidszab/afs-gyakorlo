import Chance from "chance";
import {TaskTypes, InputTypes} from "../task";
import TimeToWords from "../time";
const chance = new Chance();

export default function generateExercise(N){
    const hours = chance.unique(chance.integer, N, {min: 0, max: 23});
    let minutes = chance.unique(chance.integer, N/3, {min: 0, max: 59});
    for(let i = N/3; i < N; i++){
        minutes.push(chance.pickone([15, 30, 45]));
    }
    minutes = chance.shuffle(minutes);
    const tasks = [];
    for(let i = 0; i < N; i++){
        const task = {
            type: TaskTypes.TIME,
            input: chance.pickone([InputTypes.CHOICE, InputTypes.TEXT]),
            data: {
                hour: hours[i],
                minute: minutes[i]
            }
        }
        if(task.input == InputTypes.TEXT)
            task.data.solutions = TimeToWords(task.data.hour, task.data.minute);
        else if(task.input == InputTypes.CHOICE){
            const solutions = TimeToWords(task.data.hour, task.data.minute);
            let solution = solutions.length > 0 ? chance.pickone(solutions) : solutions[0];
            let options = [solution];
            const fake1 = chance.pickone(TimeToWords(getDifferentRandomNumber([task.data.hour], 0, 23), getDifferentRandomNumber([task.data.minute], 0, 59)));
            const fake2 = chance.pickone(TimeToWords(getDifferentRandomNumber([task.data.hour], 0, 23), getDifferentRandomNumber([task.data.minute], 0, 59)));
            options.push(fake1);
            options.push(fake2);
            options = chance.shuffle(options);
            task.data.options = options;
            task.data.solutions = [solution];
        }
        tasks.push(task);
    }
    return tasks;
}

function getDifferentRandomNumber(numbers, min, max) {
    let isOk = false;
    let random = 0;
    while(!isOk){
        random = chance.integer({min, max});
        if(!numbers.includes(random))
            isOk = true;
    }
    return random;
}