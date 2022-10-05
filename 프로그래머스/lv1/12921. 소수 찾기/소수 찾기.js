    function solution(n) {
        let answer = 0;
        let arr = new Array(n+1).fill().map((el,i)=> i);
        arr[1] = 0;
        
        for(let i = 2; i <= n; i++){
            if(arr[i] === 0) continue;
            for(let j = i+i ; j <= n; j += i) {
                arr[j] = 0;
            }
        }


        for(let k = 0; k < arr.length; k++)
            if(arr[k] !== 0)
                answer++;
        
        return answer;
    }
