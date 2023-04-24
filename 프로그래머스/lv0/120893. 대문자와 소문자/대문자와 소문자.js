function solution(my_string) {
    let strArr = my_string.split('');
    
    strArr = strArr.map(str => {
        if(str === str.toUpperCase()) return str.toLowerCase();
        else return str.toUpperCase();
    })
    
    return strArr.join('');
}