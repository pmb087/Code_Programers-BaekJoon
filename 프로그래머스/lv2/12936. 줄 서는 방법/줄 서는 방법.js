function solution(n, k) {
        const result = [];
        const arr = new Array(n).fill().map((_, i) => i + 1);

        function getNum(arr) {
          let fac = 1;
            
          for (let i = 1; i < arr.length; i++) fac *= i;

          const idx = Math.ceil(k / fac) - 1;
          k = k - idx * fac;

          // 이렇게 하면 3번째가 걸렸는데 3을 이미 썼으면 
          // 알아서 건너뛰고 다음 존재하는 숫자로 사용가능;; 개쩔구요;;
          return arr[idx];
        }

        for (let i = 1; i <= n; i++) result.push(...arr.splice(arr.indexOf(getNum(arr)), 1));

        return result;
}

