function solution(order) {
    const clap = ['3','6','9']
    let answer = 0;
    order.toString().split('').forEach(el => {
        if(clap.includes(el)) answer++;
    })
    
    return answer;
}