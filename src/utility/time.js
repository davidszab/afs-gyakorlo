export default function TimeToWords(hours, minutes) {
    if(hours < 0 || hours > 23) throw Error("hours must be between 0 and 23");
    if(minutes < 0 || minutes > 59) throw Error("minutes must be between 0 and 59");
    const solutions = [];
    if(minutes == 0){
        solutions.push(`${numberToWord(hours)} óra`);
    }else{
        const hourString = numberToWord(hours);
        const minuteString = numberToWord(minutes);
        solutions.push(`${hourString} óra ${minuteString} perc`);
        solutions.push(`${hourString} óra ${minuteString}`);
    }

    let minutesString;
    let isSpecial = true;
    if(minutes == 15)
        minutesString = "negyed";
    else if(minutes == 30)
        minutesString = "fél";
    else if(minutes == 45)
        minutesString = "háromnegyed";
    else
        isSpecial = false;
    
    if(isSpecial){
        if(hours < 12)
            solutions.push(`${minutesString} ${numberToWord(hours + 1)}`);
        else
            solutions.push(`${minutesString} ${numberToWord(hours - 11)}`);

    }
    
    if(hours == 0 && minutes == 0){
        solutions.push("éjfél");
    }

    if(hours == 12 && minutes == 0){
        solutions.push("dél");
    }

    return solutions;
}


function numberToWord(number, isTen){
    if(number > 99 || number < 0) return null;
    if(number < 10){
        switch (number) {
            case 0:
                return "nulla";
            case 1:
                return "egy";
            case 2:
                return "kettő";
            case 3:
                return "három";
            case 4:
                return "négy";
            case 5:
                return "öt";
            case 6:
                return "hat";
            case 7:
                return "hét";
            case 8:
                return "nyolc";
            case 9:
                return "kilenc"
        }
    }

    if(number % 10 == 0)
        switch (number) {
            case 10:
                return isTen ? "tizen" : "tíz";
            case 20:
                return isTen ? "huszon" : "húsz";
            case 30:
                return "harminc";
            case 40:
                return "negyven";
            case 50:
                return "ötven";
            case 60:
                return "hatvan";
            case 70:
                return "hetven";
            case 80:
                return "nyolcvan";
            case 90:
                return "kilencven";
        }    
    const tens =  parseInt(number.toString().substr(0, 1)) * 10;
    const ones = number - tens;
    return `${numberToWord(tens, true)}${numberToWord(ones)}`;
    
}