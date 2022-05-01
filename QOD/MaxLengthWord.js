// string = "I am a coder"
// output: coder

// Logic
/* 
1. Split the string into an array
2. check the length of each word and return word of max length
*/

function maxLengthWord(sentence){
    const wordArray = sentence.split(" ");

    let max_length = 0;
    let max_word = "";

    for(let word of wordArray){
        if(word.length > max_length){
            max_word = word;
            max_length = word.length;
        }
    }

    return max_word;
}

console.log(maxLengthWord("I am a coder who loves programming"));