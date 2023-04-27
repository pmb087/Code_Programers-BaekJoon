function solution(num_list, n) {
    const left = num_list.splice(n);

    return left.concat(num_list);
}