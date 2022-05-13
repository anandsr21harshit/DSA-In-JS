/*
Question variants

1. Sort array of 0,1,2
2. Segregate array of 0 and 1, 0 on left and 1 on  right

Algorithm

For Q1:

1. Take three pointer low=0, mid=0, high=n-1
2. There can be three posibility

    a) if mid = 0
        swap(arr[low], arr[mid])
        low++
        mid++

    b) if mid = 1
        mid++

    c) if mid = 2
        swap(arr[mid], arr[high])
        high--


    [0,1,1,0,1,2,2,1,0]

Brute Force:
Count occurence of each of 0,1,2 in first iteration
Then put all zeros, then ones & then twos
*/


function sort012(arr){
    let n = arr.length;

    let low=0, mid=0, high=n-1;

    while(mid <=high){
        if(arr[mid] === 0){
            // swap
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;

            low++;
            mid++;
        }
        else if(arr[mid] === 1){
            mid++;
        }
        else if(arr[mid] === 2){
            //swap
            let temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;

            high--;
        }
    }

    return arr;
}

console.log(sort012([0,1,1,0,1,2,2,1,0]));