function keyValueInversion(object){
    let result = {};

    for(const[key,value] of Object.entries(object)){
        result[value] = key;
    }

    return result;
}

obj = {
    "name" : "Doraemon",
      "age" : 5,
      "hairColor" : "none",
      "eyes" : "oval"
  }

console.log(keyValueInversion(obj));