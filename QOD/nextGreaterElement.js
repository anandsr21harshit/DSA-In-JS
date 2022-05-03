function nextGreaterElement(array){
    if(array.length === 0 || array.length === 1) return -1;

    let stack = [];
    let nextGreater = {};

    let next = array[1];

    stack.push(array[0]);

    let element;

    for(let i=1;i<array.length;i++){

        // if stack is not empty
        if(stack.length !==0){
            element = stack.pop();

            while(element < array[i]){
                nextGreater[element] = array[i];

                if(stack.length === 0) break;

                element = stack.pop();
            }

            if(element > array[i]){
                stack.push(element);
            }
        }
        stack.push(array[i]);
    }

    while(stack.length !==0){
        element = stack.pop();
        nextGreater[element] = -1;
    }

    return nextGreater;
}

console.log(nextGreaterElement([4,5,2,3,35]));