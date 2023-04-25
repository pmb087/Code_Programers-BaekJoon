function solution(my_string, is_suffix) {
    const reversedStr = my_string.split('').reverse().join('');
    const reversedSuffix = is_suffix.split('').reverse().join('');
    
    if(reversedStr.indexOf(reversedSuffix) === 0) return 1;
    return 0;
}