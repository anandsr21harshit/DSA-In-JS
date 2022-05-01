function compareDate(date1, date2){
    date1 = new Date(date1);
    date2 = new Date(date2);

    const timeDiff = Math.abs(date1-date2);
    const dayDiff = Math.ceil(timeDiff/(1000*60*60*24));

    return dayDiff;
}

console.log(compareDate("10/15/2020","12/1/2020"));