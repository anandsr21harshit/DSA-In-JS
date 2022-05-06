/* 

-> reverse stack without using for, while loop

Algorithm

1. Hold all values in function call stack until stack becomes empty
2. When stack becomes empty insert all items one by one at bottom of stack
3. We will create function insertAtBottom() that will add element at the bottom of stack
4. We will create reverse() function that will pop all elements and store it in function call stack and 
then use insertAtBottom() to add element in stack
*/

let stack = [];

function insertAtBottom(val){

    if(stack.length === 0){
        stack.push(val);
    }

    else{
        let popped = stack.pop();
        insertAtBottom(val);
        stack.push(popped);
    }
}

function reverseStack(){
    if(stack.length > 0){
        let x = stack.pop();
        reverseStack();

        insertAtBottom(x);
    }   
}

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack)

reverseStack();

console.log(stack);