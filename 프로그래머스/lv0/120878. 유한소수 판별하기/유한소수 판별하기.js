function solution(a, b) {
    let instance = 0;
    for(let i = 1; i <= a; i++) if(a % i === 0 && b % i === 0) instance = i;   
    
    b = b / instance;
    
    while(b % 2 === 0 || b % 5 === 0){
        if(b % 5 === 0) b = b / 5;
        else if(b % 2 === 0) b = b / 2;
    } 
    
    if(b === 1) return 1;
    else return 2;
}