function solution(order) {
    const mainConv = new Array(order.length).fill().map((_,i)=>i+1).reverse();
    let subConv = [];
    const answer = [];
    let count = 0;
    
    while(true){
        if(count > order.length - 1) break;
        if(mainConv[mainConv.length - 1] === order[count]){
            answer.push(mainConv.pop());
            count++
        } else if(subConv[subConv.length - 1] === order[count]){
            answer.push(subConv.pop());
            count++
        } else if(mainConv.length > 0){
            subConv.push(mainConv.pop());
        } else break;
    }
    
    return answer.length
}