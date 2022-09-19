const solution = (absolutes, signs) => absolutes.reduce((acc,crr,i)=>acc+(signs[i] === true ? crr : -crr),0);
