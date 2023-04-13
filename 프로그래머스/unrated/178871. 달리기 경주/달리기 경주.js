function solution(players, callings) {
    let playerRanks1 = new Map();
    let playerRanks2 = new Map();
    
    for(let i = 0; i < players.length; i++) {
        playerRanks1.set(i+1,players[i]);
        playerRanks2.set(players[i],i+1);
    }
    
    for(let i = 0; i < callings.length; i++){
        const beforePlayer = callings[i];
        const beforeRank = playerRanks2.get(beforePlayer);
        const targetPlayer = playerRanks1.get(beforeRank-1);
        const targetRank = beforeRank - 1;
        
        playerRanks1.set(beforeRank, targetPlayer);
        playerRanks1.set(targetRank, beforePlayer);
        playerRanks2.set(beforePlayer, targetRank);
        playerRanks2.set(targetPlayer, beforeRank);
    }
    return Array.from(playerRanks1, ([key, value]) => value);
}