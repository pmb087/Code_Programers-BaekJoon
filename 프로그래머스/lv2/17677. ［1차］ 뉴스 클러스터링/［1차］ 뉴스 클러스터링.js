function format(arg){
    const lowerArg = arg.toLowerCase();    
    const eng = /[a-z]/g;
    const arr = [];
    
     for(let i = 0; i < lowerArg.length-1; i++) {
        const str = lowerArg[i] + lowerArg[i+1];
        if(str.replace(eng, '').length === 0) arr.push(str);
    }
    return arr;
}

function solution(str1, str2) {
    const arr1 = format(str1);
    const arr2 = format(str2);
    
    if(arr1.length === 0 && arr2.length=== 0) return 65536;

    const instance = [...arr2];
    const intersection = arr1.reduce((acc,cur)=> {
        if(instance.includes(cur)) {
            const index2 = instance.indexOf(cur);
            instance.splice(index2, 1);
            return [...acc, cur];
        } else {
            return acc;
        }
    },[]);
    
    const union = arr1.length + arr2.length - intersection.length;
    return Math.floor(intersection.length / union * 65536);
}