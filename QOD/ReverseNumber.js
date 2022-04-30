// > Write a JavaScript program that reverses a number.
// Example:
// > `Input:  32243;
// > Output:  34223`


const reverseNumber = (number) => {
    let revNum = "";

    while(number > 0){
        let digit = number%10;
        revNum += digit;
        number = Math.floor(number/10);
    }

    return Number(revNum);
}

console.log(reverseNumber(32243));