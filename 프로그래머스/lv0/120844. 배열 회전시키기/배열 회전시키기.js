function solution(numbers, direction) {
    if(direction === 'right'){
        const moved = numbers.pop();
        numbers.unshift(moved);
        return numbers;
    } else {
        const moved = numbers.shift();
        numbers.push(moved);
        return numbers;        
    }
}