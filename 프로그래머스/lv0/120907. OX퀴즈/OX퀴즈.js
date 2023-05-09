function solution(quiz) {
    function convert(str){
        const [firstNum,arithm,secondNum,eqaul,answer] = str.split(' ');
        let result = null;
        if(arithm === '-') result = Number(firstNum) - Number(secondNum) === Number(answer);
        else result = Number(firstNum) + Number(secondNum) === Number(answer);
        
        return result ? 'O' : 'X';
    }
    
    return quiz.map(str => convert(str));
}