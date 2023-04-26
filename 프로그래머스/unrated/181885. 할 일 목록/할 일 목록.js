function solution(todo_list, finished) {
    return todo_list.filter((el,i) => !finished[i])
}