let getGuess = function (guess) {
    let num = Math.floor(Math.random() * (min - max + 1)) + min; 
    if (num === guess) { 
        return `your guess was right. The result was ${num}` 
    }else if (num !== guess) { 
        return `your guess was wrong. The correct answer was ${num}`
    }
};

let a = getGuess(1);
console.log(a);


