// const n = 5;
// const arr: number[] = [1, 3, 4, 5];

// function findMisingNumber(arr: number[], n: number): number {
//   const actualSum = (n * (n + 1)) / 2;
//   let arrSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i]!;
//   }
//   return actualSum - arrSum;
// }

// console.log("findMisingNumber :>> ", findMisingNumber(arr, n));

const arr: number[] = [1, 2, 4, 6];
//output - > [48,24,12,8]

//dry run ->  48-> 2*4*6*8
// 24 -> 4*6*8

function productwithoutitSelf(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let multSum = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        multSum *= arr[j]!;
      }
    }
    result.push(multSum);
  }
  return result;
}

console.log("productwithoutitSelf :>> ", productwithoutitSelf(arr));
