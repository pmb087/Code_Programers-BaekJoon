function solution(s, c) {
    s = s.map(el=>el.split(''));
    let point = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0}
    c.forEach((el,idx)=>{
        if(el-4 < 0) {
            point[`${s[idx][0]}`] += Math.abs(el-4);
        }else if(el-4 > 0){
            point[`${s[idx][1]}`] += Math.abs(el-4);
        }
    })
    const RT =  point['R'] >= point['T'] ? 'R' : 'T';
    const CF =  point['C'] >= point['F'] ? 'C' : 'F';
    const JM =  point['J'] >= point['M'] ? 'J' : 'M';
    const AN =  point['A'] >= point['N'] ? 'A' : 'N';
    return (RT + CF + JM + AN);
}