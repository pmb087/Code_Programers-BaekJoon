function solution(bookTime) {
    function convert(arr){
        const [start,end] = arr;
        const [startH,startM] = start.split(':');
        const [endH,endM] = end.split(':');
        const convertedStart = Number(startH) * 60 + Number(startM);
        const convertedEnd = Number(endH) * 60 + Number(endM) + 10;
        return [convertedStart, convertedEnd];
    }
    
    bookTime = bookTime.map(book => convert(book)).sort((a,b)=> b[0] - a[0] === 0 ? b[1] - a[1] : b[0] - a[0]);
    
    // console.log(bookTime)
    
    const answer = [bookTime.pop()];
    const bookTimeLength = bookTime.length;
    
    for(let i = 0; i < bookTimeLength; i++){
        const [start,end] = bookTime.pop();
        let isPushedWhileInnerRoop = false;
        
        for(let j = 0; j < answer.length; j++){
            if(answer[j][answer[j].length - 1] <= start) {
                answer[j].push(start,end);
                isPushedWhileInnerRoop = true;
                break;
            }
        }
        if(!isPushedWhileInnerRoop) answer.push([start,end]);
    }
    
    return answer.length;
}