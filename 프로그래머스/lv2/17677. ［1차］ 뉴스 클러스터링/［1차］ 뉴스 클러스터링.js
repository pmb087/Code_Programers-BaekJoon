function solution(str1, str2) {

    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    var eng = /[a-z]/g;
    
    const arr1 = [];
    const arr2 = [];
    for(let i =0;i<s1.length-1;i++) {
        const str = s1[i] + s1[i+1];
        if(str.replace(eng, '').length == 0) arr1.push(str);
    }
    for(let i =0;i<s2.length-1;i++) {
        const str = s2[i] + s2[i+1];
        if(str.replace(eng, '').length == 0) arr2.push(str);
    }
    
    if(arr1.length === 0 && arr2.length=== 0) return 65536;
    
    // arr1.sort();
    // arr2.sort();
    // if(JSON.stringify(arr1) == JSON.stringify(arr2)) return 65536;

    const tempArr2 = JSON.parse(JSON.stringify(arr2));
    const intersection = arr1.reduce((acc,cur)=> {
        if(tempArr2.includes(cur)) {
            const index2 = tempArr2.indexOf(cur);
            tempArr2.splice(index2, 1);
            return [...acc, cur];
        } else {
            return acc;
        }
    },[]);
    
    const union = arr1.length + arr2.length - intersection.length;
    return Math.floor(intersection.length/union*65536);
}