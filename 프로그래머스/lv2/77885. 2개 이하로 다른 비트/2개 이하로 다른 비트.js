function solution(numbers) {
    function format(N){
        let arr = N.toString(2).split('');
        
        for(let i = arr.length-1; i >= 0; i--)
            if(arr[i] === '0')
                return (N + (2 ** (arr.length - 1 - i)) - (2 ** (arr.length - 1 - i - 1)));
        
        return (N + (2 ** (arr.length)) - (2 ** (arr.length - 1)))
    }
    
    
    return numbers.map(el => {
        if(el % 2 === 0) return (el + 1);
        else return format(el)
    })
}