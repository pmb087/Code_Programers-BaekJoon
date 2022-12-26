class Queue {
    constructor(){
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }
    
    enqueue(element){
        this.storage[this.tail] = element;
        this.tail++;
    }
    
    dequeueHead(){
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++
        return removed;
    }
    
    dequeueTail(){
        let removed = this.storage[this.tail-1];
        delete this.storage[this.tail-1];
        this.tail--
        return removed;
    }
    
    status(){
        return this.tail - this.head;
    }
    currentHead(){
        return this.storage[this.head];
    }
    currentTail(){
        return this.storage[this.tail-1];
    }
}

function solution(people, limit) {
    const queue = new Queue();
    people = people.sort((a,b)=>b-a);
    for(let i = 0; i < people.length; i++){
        queue.enqueue(people[i]);
    }
    let count = 0;
    while(queue.status() > 0){
        if(queue.status() === 1) {
            count++
            break;
        }
        if(queue.currentHead() + queue.currentTail() <= limit){
            count++
            queue.dequeueHead();
            queue.dequeueTail();
        } else {
            count++
            queue.dequeueHead();            
        }
    }
    return count;
}