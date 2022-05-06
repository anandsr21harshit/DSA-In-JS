Array.prototype.myMap = function myMap(callback){
    const result = [];

    for(let index=0;index<this.length;index++){
        result.push(callback(this[index],index,this));
    }

    return result;
}

Array.prototype.myFilter = function myFilter(callback){
    const result = [];

    for(let index=0;index<this.length;index++){
        const isTrue = callback(this[index],index,this)

        if(isTrue){
            result.push(this[index]);
        }
    }

    return result;
}

Array.prototype.myReduce = function myReduce(callback, initialValue){
    if(initialValue === undefined){
        let accumulator = this[0];

        for(let index=1; index<this.length; index++){
            accumulator = callback(accumulator,this[index],index,this);
        }
        return accumulator;
    }
    else{
        let accumulator = initialValue;
        for(let index=0; index<this.length; index++){
            accumulator = callback(accumulator,this[index],index,this);
        }
        return accumulator;
    }
}

const testArray = [1,2,3,4,5];

console.log(testArray.myMap(item => item+1));

console.log(testArray.myFilter(item => item%2 !==0))

console.log(testArray.myReduce((sum,num)=> sum+num));