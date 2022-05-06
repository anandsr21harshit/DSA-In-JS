class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length === 0){
            return "underflow"
        }

        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmtpy(){
        return this.items.length === 0;
    }
}


// Method 1

// function nextGreaterElement(array){
//     if(array.length === 0 || array.length === 1) return -1;

//     let stack = [];
//     let nextGreater = {};

//     let next = array[1];

//     stack.push(array[0]);

//     let element;

//     for(let i=1;i<array.length;i++){

//         // if stack is not empty
//         if(stack.length !==0){
//             element = stack.pop();

//             while(element < array[i]){
//                 nextGreater[element] = array[i];

//                 if(stack.length === 0) break;

//                 element = stack.pop();
//             }

//             if(element > array[i]){
//                 stack.push(element);
//             }
//         }
//         stack.push(array[i]);
//     }

//     while(stack.length !==0){
//         element = stack.pop();
//         nextGreater[element] = -1;
//     }

//     return nextGreater;
// }

// console.log(nextGreaterElement([4,5,2,3,35]));

// Method 2

// arr = [3,5,2,4,6]
// stack = [6,4,2]
function nextGreaterElement(arr){
    const length = arr.length;

    const stack = new Stack();

    const result = [];

    for(let i=length-1; i>=0; i--){
        while(!stack.isEmtpy() && stack.peek() < arr[i]){
            stack.pop();
        }

        result[i] = stack.isEmtpy() ? -1 : stack.peek();

        stack.push(arr[i]);
    }

    return result;
}

console.log(nextGreaterElement([3,5,2,4,6]))