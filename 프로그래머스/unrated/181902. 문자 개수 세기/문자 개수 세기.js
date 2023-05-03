function solution(my_string) {
    let askiObject = {};
    for(let i = 65; i <= 90; i++) askiObject[i] = 0;  
    for(let i = 97; i <= 122; i++) askiObject[i] = 0;    
    for(let i = 0; i < my_string.length; i++) askiObject[my_string.charCodeAt(i)]++;
    return Object.values(askiObject);
}