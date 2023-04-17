const answer = [];

function recursion(stack,from,mid,to){
    if(stack === 1) {
        answer.push([from,to]);
        return;
    }
    recursion(stack-1,from,to,mid);
    answer.push([from, to]);
    recursion(stack-1,mid,from,to);
}

function solution(n) {
    recursion(n,1,2,3);
    return answer;
}