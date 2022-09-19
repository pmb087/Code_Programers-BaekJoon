const solution = numbers => Array(10).fill().map((_, i) => i).filter(el => !numbers.includes(el)).reduce((acc,crr)=>(acc+crr),0);
    
