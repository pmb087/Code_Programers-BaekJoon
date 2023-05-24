// 우선순위 큐
class Heap {
    constructor() {
        this.heap = [];
    }
    
    push(newValue) {
        const heap = this.heap;
        heap.push(newValue);
        let index = heap.length - 1, parent = Math.floor((index - 1) / 2);
        while(index > 0 && heap[parent] < heap[index]) {
            [heap[parent], heap[index]] = [heap[index], heap[parent]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    
    pop() {
        const heap = this.heap;
        if(heap.length <= 1) return heap.pop();
        const ret = heap[0];
        heap[0] = heap.pop();
        let here = 0;
        while(1) {
            let left = here * 2 + 1, right = here * 2 + 2;
            if(left >= heap.length) break;
            let next = here;
            if (heap[next] < heap[left]) next = left;
            if (right < heap.length && heap[next] < heap[right]) next = right;
            if (next === here) break;
            [heap[here], heap[next]] = [heap[next], heap[here]];
            here = next;
        }
        return ret;
    }
}


function solution(n, k, enemy) {
    // 모든 라운드에 무적권을 사용할 수 있다면 총 라운드 수 리턴
    if(k >= enemy.length) return enemy.length;
    
    const queue = new Heap();
    
    // 라운드 진행
    for(let i = 0; i < enemy.length; i++){        
        // 이번라운드 병사 소모
        n -= enemy[i];
        queue.push(enemy[i]);
        
        // 병사 수가 0보다 적어졌다면
        while(n < 0){
            if(k > 0){
                n += queue.pop();
                k--;
            } else {
                return i;                
            }            
        }
    }
    
    // 해당 라인이 실행됐다면 무적권은 총 라운드 수보다 적었지만
    // 모든 라운드를 막아낼 수 있었다는 것이므로 총 라운드 수 리턴
    return enemy.length;
}