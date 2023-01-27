function solution(s, t) {
    const skillIndex = s.split('');
    const filteredTree = t.map(el => el.split('').filter(fel => skillIndex.includes(fel)));    
    
    let answer = 0;
    
    filteredTree.forEach(Oel => {
        let correctTree = true;
        Oel.forEach((Iel,i) => {
            if(skillIndex.indexOf(Iel) === i) return;
            correctTree = false;
        })
        if(correctTree) answer++;
    })
    
    return answer;
}