function solution(picture, k) {
    if(k === 1) return picture;
    
    picture = picture.map(pic => pic.split('').map(el => el.repeat(k)).join(''));
    
    const answer = [];
    
    for(let i = 0; i < picture.length; i++){
        for(let j = 0; j < k; j++) answer.push(picture[i]);
    }
    
    return answer;
}