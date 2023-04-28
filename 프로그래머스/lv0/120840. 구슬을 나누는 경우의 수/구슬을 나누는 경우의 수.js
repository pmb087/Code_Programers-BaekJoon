function solution(balls, share) {
    let allBalls = Array.from({ length: balls }, (_, index) => index + 1).reduce(
        (a, b) => {
          return a * b;
        },
        1
    );

    let ballMinusShare = Array.from(
        { length: balls - share },
        (_, index) => index + 1
    ).reduce((a, b) => {
        return a * b;
    }, 1);

    let allShare = Array.from({ length: share }, (_, index) => index + 1).reduce(
        (a, b) => {
        return a * b;
        },
        1
    );

    return Math.round(allBalls / (ballMinusShare * allShare));
}