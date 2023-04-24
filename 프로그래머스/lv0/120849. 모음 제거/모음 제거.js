function solution(my_string) {
    my_string = my_string.replace(/a/gi,'');
    my_string = my_string.replace(/e/gi,'');
    my_string = my_string.replace(/i/gi,'');
    my_string = my_string.replace(/o/gi,'');
    my_string = my_string.replace(/u/gi,'');
    return my_string;
}