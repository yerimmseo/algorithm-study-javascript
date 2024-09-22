function solutions(players, callings) {
    const playersMap = {};
    
    for (let i = 0; i < players.length; i++) {
        playersMap[players[i]] = i;
    }
    
    for (let i = 0; i < callings.length; i++) {
        const targetIndex = playersMap[callings[i]];
        const looserName = players[targetIndex - 1];
    
        players[targetIndex - 1] = callings[i];
        players[targetIndex] = looserName;
    
        playersMap[callings[i]] = targetIndex - 1;
        playersMap[looserName] = targetIndex;
    }

    return players;
}