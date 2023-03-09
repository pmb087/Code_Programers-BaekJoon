function solution(numbers) {
    const numArr = numbers.split('');
    const totalResult = [];
    let answer = 0;
    
    function getNum (curStr, elseArr){
        totalResult.push(curStr);
        if(elseArr.length === 0) return;
        
        for(let i = 0; i < elseArr.length; i++){
            const instanceArr = elseArr.filter((el,index) => index !== i);
            const instanceStr = curStr + elseArr[i];
            getNum(instanceStr, instanceArr);
        }
    }
    
    numArr.forEach((el,idx) =>{
        const curElseArr = numArr.filter((_,index) => index !== idx);
        getNum(el, curElseArr);        
    })
    
    const formatedResult =[...(new Set(totalResult.map(el => Number(el.toString(10)))))];
    
    function isPrime(num) {
        if(num === 1 || num === 0) return false; 
        if(num === 2) return true;

        for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0) return false;
        }
        return true; 
    }
    
    formatedResult.forEach(el => {
        if(isPrime(el)) answer++;
    })
    
    return answer;
}