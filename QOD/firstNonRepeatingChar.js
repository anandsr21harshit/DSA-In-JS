/* 
Given a string s, find the first non-repeating character in it and return its index If it does not exist, return -1 

Input: s = "neogcamp"
Output: "n"

Input: s = "nneeooggccaammpp"
Output: -1

*/

function firstNonRepeatingCharater(array){
    const freqMap = new Map();
    const lengthOfArray = array.length;

    for(let i=0;i<lengthOfArray;i++){
        if(freqMap.has(array[i])){
            freqMap.set(array[i],freqMap.get(array[i])+1);
        }
        else{
            freqMap.set(array[i],1);
        }
    }

    for(const [key,value] of freqMap.entries()){
        if(value === 1){
            return key;
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharater("nneeooggccaammpp"));