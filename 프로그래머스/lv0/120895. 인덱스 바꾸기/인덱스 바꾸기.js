function solution(my_string, num1, num2) {
    let instance = my_string.split('');
    const left = instance[num2];
    const right = instance[num1];
    instance[num1] = left;
    instance[num2] = right;
    
    return instance.join('');
}