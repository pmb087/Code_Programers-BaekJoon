function solution(myString, pat) {
    const reversedStr = myString.split('').map(str => str === 'A' ? 'B' : 'A').join('');
    return reversedStr.includes(pat) ? 1 : 0;
}