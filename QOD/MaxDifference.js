/*
Given an array of numbers, pick any two numbers a  and b, we could get the difference by Math.abs(a - b). 
Write a function to get the largest difference.
 */

function maxDifference(array){

    if(array.length === 0) return 0;
    // find largest and smallest number

    let largestNum = array[0];
    let smallestNum = array[0];

    for(let number of array){
        smallestNum = number < smallestNum ? number : smallestNum;
        largestNum = number > largestNum ? number : largestNum;
    }
    
    return Math.abs(smallestNum - largestNum);
}


console.log(maxDifference([5,8,13,17,26]));