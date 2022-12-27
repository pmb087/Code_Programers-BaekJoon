const solution = arr => {
	let count = 1;   
    while(true){
        let innerCount = 0;
        for(let i = 0; i < arr.length; i++){
            if(count % arr[i] === 0) {
                innerCount++
            };
        }
        if(innerCount === arr.length){
            break;
        }
        innerCount = 0;
        count++;
    }
  	return count;
}