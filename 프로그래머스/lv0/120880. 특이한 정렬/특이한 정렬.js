function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const diffA = Math.abs(n - a);
        const diffB = Math.abs(n - b);
        
        if(diffA < diffB) return -1;
        else if(diffA > diffB) return 1;
        else {
            if(a > b) return -1;
            else return 1;
        }
    })
}