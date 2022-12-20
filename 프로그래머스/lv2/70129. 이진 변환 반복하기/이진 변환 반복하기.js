function solution(s) {
    let removedCount = 0;
    let formatedCount = 0;
    while(s !== '1'){
        formatedCount ++;
        let s1 = s.replace(/0/gi,'');
        removedCount += s.length-s1.length;
        s = s1.length.toString(2);
    }
    return [formatedCount, removedCount];
}