function solution(n, arr1, arr2) {
    
    let instance = [];
    
    let arr1Result = 
        arr1.map(el => el.toString(2))
        .map(el => (
        el.length < Math.max(...arr1.map(el => el.toString(2).length)) ?
        "0".repeat(Math.max(...arr1.map(el => el.toString(2).length)) - el.length) + el : el))
        .map(el => el.replace( /1/g ,"#"))
        .map(el => el.replace( /0/g ," "))
    
    let arr2Result = 
        arr2.map(el => el.toString(2))
        .map(el => (
        el.length < Math.max(...arr2.map(el => el.toString(2).length)) ? 
        "0".repeat(Math.max(...arr2.map(el => el.toString(2).length)) - el.length) + el : el))
        .map(el => el.replace( /1/g ,"#"))
        .map(el => el.replace( /0/g ," "))
    
    for(let i = 0; i < n; i++){
        let instance1 = '';
        for(let j = 0; j < n; j++){
            instance1 += (arr1Result[i][j] === '#' || arr2Result[i][j] === '#' ? "#" : " ")
        }
        instance.push(instance1);
    }
    
    return instance
    
}