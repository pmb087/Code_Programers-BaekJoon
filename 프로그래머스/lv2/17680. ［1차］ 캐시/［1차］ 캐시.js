function solution(cacheSize, cities) {
    cities = cities.map(el => el.toLowerCase());
    let cacheStore = [];
    let runTime = 0;
    for(let i = 0; i < cities.length; i++){
        if(cacheStore.includes(cities[i])){
            let instance = [...cacheStore.slice(0,cacheStore.indexOf(cities[i])),
                            ...cacheStore.slice(cacheStore.indexOf(cities[i])+1)]
            cacheStore = instance;
            cacheStore.push(cities[i]);
            runTime += 1;
            continue;
        }
        if(cacheStore.length < cacheSize){
            cacheStore.push(cities[i])
            runTime += 5;
            continue;            
        }
        if(cacheStore.length === cacheSize){
            cacheStore.push(cities[i]);
            cacheStore.shift();
            runTime += 5;
            continue;
        }
    }
    return runTime;
}