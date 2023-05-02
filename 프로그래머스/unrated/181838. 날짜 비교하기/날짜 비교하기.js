function solution(date1, date2) {
    const [Y1,M1,D1] = date1;
    const [Y2,M2,D2] = date2;
    
    if(Y1 < Y2) return 1;
    else if(Y1 === Y2){
        if(M1 < M2) return 1;
        else if(M1 === M2){
            if(D1 < D2) return 1;
            else return 0;
        } return 0;
    } return 0;
}