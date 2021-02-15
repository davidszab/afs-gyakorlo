export const TaskTypes = {
    TEXT: "TEXT",
    TIME: "TIME"
}

export const InputTypes = {
    TEXT: "TEXT",
    CHOICE: "CHOICE"
}

const time = {
    type : TaskTypes.TIME,
    input: InputTypes.TEXT,
    data: {
        hour: 14,
        minute: 15,
        solutions: ["tizennégy óra tizenöt perc", "negyed három"]
    }
}

const time2 = {
    type: TaskTypes.TIME,
    input: InputTypes.CHOICE,
    data: {
        hour: 14,
        minute: 15,
        solutions: ["negyed három"],
        options: ["negyed három", "tizennégy óra tizenhat perc", "öt óra hét perc"]
    }
}

/*
{
            type: TaskTypes.TEXT,
            input: InputTypes.TEXT,
            data: {
                content: 14,
                solutions: ["tizennégy"],
            }
        }
*/
/*
{
            type: TaskTypes.TEXT,
            input: InputTypes.CHOICE
            data: {
                content: 14,
                solutions: ["tizennégy"],
                options: ["tizennégy", "huszonhét", "hetvennégy"]
            }
        }
*/