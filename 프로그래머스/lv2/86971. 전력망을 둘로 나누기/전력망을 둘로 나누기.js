function solution(n, wires) {
    const diff = [];
    
    for(let i = 0; i < wires.length; i++){
        const currentWires = wires.filter((_,index) => index !== i);
        const includesNodes = [1];
        const queue = [1];
        
        while(queue.length){
            const currentNode = queue.pop();
            const nextWires = currentWires.filter(wire => wire.includes(currentNode));
            if(nextWires.length > 0){
                const nextNodes = nextWires.map(wire =>  wire[0] === currentNode ? wire[1] : wire[0]);
                const finalNextNodes = nextNodes.filter(node => !includesNodes.includes(node))
                queue.push(...finalNextNodes);
                includesNodes.push(...finalNextNodes);
            }
        }
        
        const[left, right] = [includesNodes.length, n - includesNodes.length];
        const currentResult = Math.abs(left - right);
        
        diff.push(currentResult);
    }
    
    return Math.min(...diff)
}