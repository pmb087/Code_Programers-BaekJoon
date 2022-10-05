function solution(s) {
    const a = (s.length % 2 == 0) ? 2 : 1;
    return (a==1) ? (s.slice(Math.floor(s.length/2),Math.floor(s.length/2)+a)) :
    (s.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+a-1))
 
}