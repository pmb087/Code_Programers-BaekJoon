function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const beforeLast = num_list[num_list.length - 2];
    
    let addLast = 0;
    
    if(last > beforeLast) addLast = last - beforeLast;
    else addLast = last * 2;
    
    num_list.push(addLast);
    
    return num_list
}