function solution(a, b, c, d) {
    let point = 0;
    
    if(a === b && b === c && c === d) point += 1111 * a;
    else if(a === b && b === c) point += (10 * a + d) ** 2;
    else if(a === b && b === d) point += (10 * a + c) ** 2;
    else if(a === c && c === d) point += (10 * a + b) ** 2;
    else if(b === c && c === d) point += (10 * b + a) ** 2;
    else if(a === b && c === d) point += (a + c) * Math.abs(a - c);
    else if(a === c && b === d) point += (a + b) * Math.abs(a - b);
    else if(a === d && b === c) point += (a + b) * Math.abs(a - b);
    else if(a === b) point += c * d;
    else if(a === c) point += b * d;
    else if(a === d) point += c * b;
    else if(b === c) point += a * d;
    else if(b === d) point += a * c;
    else if(c === d) point += a * b;
    else point += Math.min(a,b,c,d);
    
    return point
}