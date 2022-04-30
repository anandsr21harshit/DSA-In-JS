const octalToDecimal = (octalNum) => {
    let num = octalNum;

    let base = 1; // 8^0 =1

    let decimalValue = 0;

    while(num > 0){
        let digit = num %10;
        decimalValue += digit*base;
        base = base * 8;

        num = Math.floor(num/10);
    }

    return decimalValue;
}

console.log(octalToDecimal(116));