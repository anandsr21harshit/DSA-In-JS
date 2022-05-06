function countVowelConsonant(string){
    string = string.toLowerCase();

    let freqMap = new Map();
     for(let i=0;i<string.length;i++){
         if(freqMap.has(string[i])){
            freqMap.set(string[i], freqMap.get(string[i]) +1);
         }
         else{
             freqMap.set(string[i],1)
         }
     }
     console.log(freqMap)
     let vowelCount = 0, consonantCount = 0;

     for(const[key,value] of freqMap.entries()){
         switch(key){
             case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowelCount = vowelCount + value;
                break;
            default:
                consonantCount = consonantCount + value;
         }
     }

     return {
         vowel: vowelCount,
         consonant: consonantCount
     }
}

console.log(countVowelConsonant("Bookkeeper"))

