function solution(num_list) {
    const oddSum = num_list.filter((num,index) => index % 2 === 1).reduce((acc,cur) => acc+cur);
    const evenSum = num_list.filter((num,index) => index % 2 === 0).reduce((acc,cur) => acc+cur);
    
    return Math.max(oddSum, evenSum);
}