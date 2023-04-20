function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        const arr1Sum = arr1.reduce((acc,cur)=>acc+cur);
        const arr2Sum = arr2.reduce((acc,cur)=>acc+cur);
        if(arr1Sum === arr2Sum) return 0;
        else if(arr1Sum > arr2Sum) return 1;
        else if(arr1Sum < arr2Sum) return -1;
    } else if(arr1.length > arr2.length) return 1;
        else if(arr1.length < arr2.length) return -1;
}