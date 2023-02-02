function solution(m, n, board) {
    
    // 배열을 세로로 바꾸는 로직
    let formatBoard = [];
    
    for(let i = 0; i < n; i++){
        let instance = [];
        for(let j = 0; j < m; j++){
            instance.push(board[j][i]);
        }
        formatBoard.push(instance);
        instance = [];
    }
    
    // 제거 될 블럭을 찾아놓는 함수
    function find(){
        let isElse = false;
        for(let i = 0; i < formatBoard.length-1; i++){
            for(let j = 0; j < formatBoard[i].length-1; j++){
                if(formatBoard[i][j][0] !== '-'
                  &&formatBoard[i][j][0] === formatBoard[i][j+1][0]
                  && formatBoard[i][j][0] === formatBoard[i+1][j][0]
                  && formatBoard[i][j][0] === formatBoard[i+1][j+1][0]){
                    formatBoard[i][j] = `${formatBoard[i][j]}-`
                    formatBoard[i][j+1] = `${formatBoard[i][j+1]}-`
                    formatBoard[i+1][j] = `${formatBoard[i+1][j]}-`
                    formatBoard[i+1][j+1] = `${formatBoard[i+1][j+1]}-`
                    isElse = true;
                }
            }
        }
        return isElse;
    }
    
    // find 함수로 찾은 블럭을 제거하고 남은 블럭을 sort하는 함수
    function deleteBlock(){
        return formatBoard.map(Oel => {
            const instance = Oel.map(Iel => {
                if(Iel.split('').includes('-')){
                    return '-'
                }
                return Iel;
            })
            
            return instance.sort((a,b)=> {
                if(a === '-') return -1;
                else 1;
            })
        })
    }
    
    // find의 결과값이 지워야 할 블럭이 남아있지 않다고 판단될 때 까지 지워야 할 블럭을 없애는 작업
    while(find()){
        formatBoard = deleteBlock();
    }
    
    return formatBoard.reduce((acc,cur)=> acc + cur.filter(el => el  === '-').length,0);
}