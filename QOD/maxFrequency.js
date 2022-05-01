function maxFrequency(array){

    const freqMap = new Map();
    
    for(let num of array){
        if(freqMap.has(num)){
            freqMap.set(num, freqMap.get(num)+1);
        }
        else{
            freqMap.set(num,1)
        }
    }

    let maxFreq = 0;
    let maxFreqNum = null;

    for(const [keys, value] of freqMap.entries()){
        if(value > maxFreq){
            maxFreq = value;
            maxFreqNum = keys;
        }
        if(value === maxFreq && keys > maxFreqNum){
            maxFreqNum = keys; 
        }
    }

    return maxFreqNum;
}

console.log(maxFrequency([10, 10,20, 20,70,70,70,70, 30, 20, 20,50,50,50,50]));