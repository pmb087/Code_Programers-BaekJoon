function solution(n, words) {
    let answer = [];
    let readedEl = [];
        
    for(let i = 0; i < words.length; i++){
        // 단어의 길이가 1글자일 때 예외
        if(words[i].length === 1){
            answer.push((i+1) % n === 0 ? n : (i+1) % n, Math.ceil((i+1) / n))
            console.log('1',i);
            return answer;
        }   
        
        // 앞에 나온 단어와 중복일 때 예외
        if(!readedEl.includes(words[i])){
            readedEl.push(words[i]);
            console.log('push',readedEl);
        } else {
            answer.push((i+1) % n === 0 ? n : (i+1) % n, Math.ceil((i+1) / n))
            console.log('3', i);
            return answer;
        }
                
        // 앞단어 끝글자, 뒷단어 첫글자 다를 때 예외
        if(i < words.length-1 && words[i].split('')[words[i].split('').length-1] !== words[i+1].split('')[0]){
            answer.push((i+2) % n === 0 ? n : (i+2) % n, Math.ceil((i+2) / n));
            console.log('2', i);
            return answer;   
        }
    }
    
    return [0,0];
}