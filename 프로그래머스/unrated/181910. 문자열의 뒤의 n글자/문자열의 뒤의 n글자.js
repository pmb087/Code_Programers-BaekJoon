function solution(my_string, n) {
    const position = my_string.length - n;
    return my_string.slice(position);
}