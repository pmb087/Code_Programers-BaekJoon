function solution(msg) {
    const array =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let stack = []
    const result = []
    for(let i=0; i<msg.length;i++) {
        stack.push(msg[i])
        if(array.includes(stack.join(''))) continue;
        array.push(stack.join(''));
        stack.pop();
        const index = array.indexOf(stack.join('')) + 1;
        result.push(index);
        stack = [];
        i--;
    }
    const index = array.indexOf(stack.join(''))+ 1;
    result.push(index);
    return result
}