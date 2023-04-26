function solution(arr, delete_list) {
    return arr.filter(el => !delete_list.includes(el))
}