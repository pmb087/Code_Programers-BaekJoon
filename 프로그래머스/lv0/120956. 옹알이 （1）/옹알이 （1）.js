function solution(babblings) {
    const sounds = ['aya','ye','woo','ma'];
    
    sounds.forEach(sound => {
        babblings = babblings.map(babbling=> {
            return babbling.replace(sound, ' ');
        });
    })
    
    const answer = babblings.length - babblings.map(babbling => {
        return babbling.replace(/\s/g, '');
    }).filter(babbling => babbling.length > 0).length
    
    return answer;
}