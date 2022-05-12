/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

1. Do it in two traversal
2. Do it in single traversal
*/

// Method 1 
// --------------------
/* 
Algorithm 
1. Create count = 0
2. Iterate over the array. Whenever you encounter a non-zero element, insert it at count and do count++
3. After that iterate from count to n-1 and insert 0 at all positions
*/
//---------------------
// function moveZerosToEnd(array){
//     let n = array.length;

//     let count = 0;

//     for(let i=0; i<n; i++){
//         if(array[i] !== 0){
//             array[count++] = array[i];
//         }
//     }

//     for(let i= count; i<n; i++){
//         array[i] = 0;
//     }

//     return array
// }

console.log(moveZerosToEnd([0,1,0,3,12]));

// Method 2: using single traversal

/*
1. let count = 0
2. whenever you encounter 0, increment count
3. whenever you encounter non-zero and count > 0, then swap zero and non-zero element
*/

function moveZerosToEnd(array){
    let n = array.length;

    let count = 0;

    for(let i=0; i<n; i++){
        if(array[i] === 0){
            count++;
        }
        else if( count > 0){
            let temp = array[i];
            array[i] = 0;
            array[i-count] = temp;
        }
    }

    return array;
}