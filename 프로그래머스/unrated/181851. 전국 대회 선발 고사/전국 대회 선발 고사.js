function solution(rank, attendance) {
    let tempRank = [...rank].sort((a,b) => a-b);
    const [a, b, c] = tempRank
        .map((item, index) => {
        const idx = rank.indexOf(item);
        return attendance[idx] ? idx : 1001;
        })
        .filter((i) => i !== 1001)
        .slice(0, 3);

    return (a * 10000) + (b * 100) + c;
}