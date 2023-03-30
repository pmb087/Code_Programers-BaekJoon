// function solution(N, road, K) {
//     let result = {1:0};
    
//     function search(curTime, curPos){
//         const list = road.filter(info => info[0] === curPos || info[1] === curPos);
//         const moveList = list.filter(el => {
//             const target = el[0] === curPos ? el[1] : el[0];
//             if(result[target] !== undefined){
//                 if(result[target] > el[2]) return true;
//                 else return false;
//             }
//             return true;
//         })
        
//         moveList.forEach(move => {
//             const sumTime = curTime + move[2];
//             if(sumTime <= K){
//                 const targetPos = [move[0],move[1]].filter(pos => pos !== curPos)[0]
//                 result[targetPos] = sumTime;
//                 search(sumTime, targetPos);
//             }
//         })
//     }
    
//     search(0,1);
    
//     return Object.keys(result).length;
// }

function solution(N, road, K) {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();

    lines[to].forEach((next) => {
      if ( arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return arr.filter((item) => item <= K).length;
}