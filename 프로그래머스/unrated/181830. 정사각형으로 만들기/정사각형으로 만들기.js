function solution(arr) {
    const width = arr[0].length;
    const height = arr.length;
    
    const maxLength = Math.max(width, height);
    
    if(width > height){
        const instance = new Array(width).fill().map(_ => 0);
        
        for(let i = 0; i < width - height; i++) arr.push(instance);
    } else if(height > width){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < height - width; j++) arr[i].push(0);
        }
    }
    
    return arr;
}