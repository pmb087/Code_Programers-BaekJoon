function solution(dartResult) {
    
    let arr = dartResult.split('');
    
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] == "1" && arr[i+1] == '0') {
            arr[i] = "10";
            arr.splice(i+1,1);
        }
    }
    
    let hitArr = [];
    let onceArr = [];
    let answer = 0;
    
    arr.forEach((el,i)=>{
        if(el >= 0 && el <= 10)
            hitArr.push(i);
    })
    
    hitArr.shift();
    
    onceArr.push(arr.slice(0,hitArr[0]));
    onceArr.push(arr.slice(hitArr[0],hitArr[1]));
    onceArr.push(arr.slice(hitArr[1]))
    
    console.log(onceArr)      
            
    let instanceArr = [];
    let instance = 0;
    
    onceArr.forEach((el,i)=>{        
        onceArr[i].forEach((iel,ii)=>{
            
            if(ii === 0) instance = iel;
            if(ii === 1) {
                if(iel == 'S') instance = Math.pow(instance, 1);
                if(iel == 'D') instance = Math.pow(instance, 2);
                if(iel == 'T') instance = Math.pow(instance, 3);
            } 
            if(ii === 2) {
                if(iel == '*') {
                    if(i >= 1) instanceArr[i-1] = instanceArr[i-1] * 2;
                    instance = instance * 2;
                }
                if(iel == '#') instance = instance * -1;                   
            }
        })
        instanceArr.push(instance);
        instance = 0;
    })
    
    instanceArr.forEach((el,i)=>{
        answer += el;
    })
    
    return answer;
}