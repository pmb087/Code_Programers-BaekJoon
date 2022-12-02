function solution(new_id) {
    let answer = new_id.toLowerCase();
    answer = answer.replace(/[^\w\-_.]*/gi, "");
    answer = answer.replace(/\.{2,}/gi, ".");
    answer = answer.replace(/^[.]|[.]$/gi, "");
    answer = answer.length === 0 ? "a" : answer;
    answer = answer.length >= 16 ? answer.slice(0,15) : answer;
    answer = answer.replace(/^[.]|[.]$/gi, "");
    while(answer.length <= 2){
      answer += answer.slice(answer.length-1,answer.length);            
    }
    return answer;
}