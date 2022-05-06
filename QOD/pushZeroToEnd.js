/*
Given an integer array nums, move all 0's to the end of it while m
aintaining the relative order of the non-zero elements.

Input: nums = [0,2,0,3,12,0]
Output: [2,3,12,0,0,0]

*/

/* ------ Algorithm ------ */

// 1. Take a reference pointer of first element
// 2. Iterate through array
// 3. if element is not equal to 0, then swap it with element at index of ref pointer and increment ref pointer by 1

function swap(array,index1,index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp;
}

function pushZeroToEnd(array){
    let refPointer = 0;

    for(let i=0; i<array.length; i++){
        if(array[i] !== 0){
            swap(array,i,refPointer);
            refPointer++;
        }
    }

    return array;
}

console.log(pushZeroToEnd([1,0,0,2,0,12]));
