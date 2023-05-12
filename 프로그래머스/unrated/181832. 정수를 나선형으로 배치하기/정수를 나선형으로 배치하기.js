function solution(n) {
    let answer = new Array(n);
    for(let i = 0; i < n; i++) answer[i] = new Array(n);
    
    let directionMax = {left: 0, right: n-1, up: 1, down:n-1};
    
    const di = [0, 1, 0, -1];
    const dj = [1, 0, -1, 0];
    let direction = 0;

    let count = 1
    let i = 0
    let j = 0
    
    while(count <= n * n){
        answer[i][j] = count
        count += 1
        
        if (direction % 4 == 0 && j == directionMax.right){
            direction += 1
            directionMax.right -= 1
        } else if (direction % 4 == 1 && i == directionMax.down){
            direction += 1
            directionMax.down -= 1
        } else if (direction % 4 == 2 && j == directionMax.left){
            direction += 1
            directionMax.left += 1
        } else if (direction % 4 == 3 && i == directionMax.up){
            direction += 1
            directionMax.up += 1
        }
        
        i += di[direction % 4]
        j += dj[direction % 4]
    }
    
    return answer;
}