function solution(myString) {
    return myString.split('').map(el => {
        const curCharCode = el.charCodeAt(0);
        if(curCharCode >= 97 && curCharCode <= 107) return 'l';
        else return el;
    }).join('')
}