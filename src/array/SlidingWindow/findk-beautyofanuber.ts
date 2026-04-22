//input = 240
//k = 2
//output = 2

//explanation  24 % 240 = 0  count 1
//             40% 240 = 0   count 2

const findKbeautynumber = (num: number, k: number): number => {
  let count: number = 0;
  // for track each degit change into string
  const s = num.toString();
  for (let i = 0; i <= s.length - k; i++) {
    const substr = s.slice(i, i + k);
    const subNum = Number(substr);

    if (subNum !== 0 && num % subNum === 0) {
      count++;
    }
  }
  return count;
};

//TC -> O(n*K)
//SC -> O(1)

const num: number = 24010240;
const k: number = 2;
const output = findKbeautynumber(num, k);
console.log("output :>> ", output);
