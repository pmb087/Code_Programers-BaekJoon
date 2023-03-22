function solution(m, musicinfos) {
    m = m.replace(/C#/g,'c').replace(/D#/g,'d').replace(/F#/g,'f').replace(/G#/g,'g').replace(/A#/g,'a');
    musicinfos = musicinfos.map(info => info.split(','))
        .map(info => {
        let instance = [...info];
        instance[3] = info[3]
             .replace(/C#/g,'c')
             .replace(/D#/g,'d')
             .replace(/F#/g,'f')
             .replace(/G#/g,'g')
             .replace(/A#/g,'a');
        return instance;                     
    });
    
    function format(start, end, music){
        const [startH, startM] = start.split(':').map(time => Number(time));
        const [endH, endM] = end.split(':').map(time => Number(time));
        
        const diff = (endH * 60 + endM) - (startH * 60 + startM);
        
        const [share,remainder] = [Math.floor(diff / music.length), diff % music.length];
        let instance = '';
        
        for(let i = 0; i < share; i++) instance += music;
        instance += music.slice(0, remainder);
        return instance;
    }
    
    function startTime (start) {
        const [H, M] = start.split(':').map(time => Number(time));
        return (H * 60 + M);
    }
    
    musicinfos = musicinfos.map(info => {
        let instance = [...info];
        instance[3] = format(info[0], info[1], info[3])
        return instance;
    })
    
    const answer = [];
    
    musicinfos.forEach(info => {
        if(info[3].includes(m)){
            answer.push({music: info[2], length: info[3].length, start: startTime(info[0])});
        }
    })
    
    answer.sort((a,b) => b.length - a.length === 0 ? a.start - b.start : b.length - a.length);
    
    // return answer;
    
    return answer.length > 0 ? answer[0].music : "(None)"
}