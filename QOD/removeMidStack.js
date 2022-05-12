/* 
Given a stack with push(), pop(), empty() operations, delete the middle of it without using any additional data structure.
*/

function deleteMid(stack,n,curr){

    if(stack.length === 0){  
        return;
    }
    if(curr === parseInt(n/2,10)){
        stack.pop();
        return;
    }

    let x  = stack.pop();
    deleteMid(stack,n,curr+1);

    if(curr != parseInt(n/2,10)) stack.push(x);
}

let stack = [1,2,3,4,5,6];

deleteMid(stack,6,0);

console.log(stack);