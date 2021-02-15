import Chance from "chance";
import NumberToWords from "../numbers";
import {TaskTypes, InputTypes} from "../task";
const chance = new Chance();

export default function generateExercise(){
    const numbers = chance.unique(chance.integer, 12, {min: 0, max: 99});
    const tasks = [];
    for(let i = 0; i < 12; i++){
        const input = chance.integer({min: 0, max: 1});
        const order = chance.integer({min: 0, max: 1});

        const task = {type: TaskTypes.TEXT};
        switch (input) {
            case 0:
                task.input = InputTypes.TEXT;
                break;
            case 1:
                task.input = InputTypes.CHOICE;
                break;
        }
        if(task.input == InputTypes.TEXT){
            const number = numbers[i];
            const numberWithWords = NumberToWords(number);
            if(order == 0){
                task.data = {content: number, solutions: [numberWithWords]}
            }else if(order == 1){
                task.data = {content: numberWithWords, solutions: [number.toString()]}
            }
        }
        else if(task.input == InputTypes.CHOICE){
            const number = numbers[i];
            const number2 = differentNumber([number]);
            const number3 = differentNumber([number, number2]);
            const nWW = NumberToWords(number);
            const n2WW = NumberToWords(number2);
            const n3WW = NumberToWords(number3);
            if(order == 0){
                task.data = {
                    content: number,
                    solutions: [nWW],
                    options: chance.shuffle([nWW, n2WW, n3WW])
                }
            }else if(order == 1){
                task.data = {
                    content: nWW,
                    solutions: [number.toString()],
                    options: chance.shuffle([number.toString(), number2.toString(), number3.toString()])
                }
            }
        }
        tasks.push(task);
    }
    return tasks;
}

function differentNumber(numbs){
    let isFinished = false;
    let number;
    while(!isFinished){
        number = chance.integer({min: 0, max: 99});
        if(!numbs.includes(number))
            isFinished = true;
    }
    return number;
}