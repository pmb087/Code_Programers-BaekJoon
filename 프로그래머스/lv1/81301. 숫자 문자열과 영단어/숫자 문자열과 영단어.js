const arr =[
    /zero/ig,
    /one/ig,
    /two/ig,
    /three/ig,
    /four/ig,
    /five/ig,
    /six/ig,
    /seven/ig,
    /eight/ig,
    /nine/ig
];

const solution = s => {
    for(let i =0;i<10;i++){
        let answer = (s.replace(arr[i],i))
        s= answer
    }
    return parseInt(s);
}