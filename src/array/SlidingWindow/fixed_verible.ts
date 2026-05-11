//Question 1 — Maximum Sum Subarray of Size K
//arr = [2,1,5,1,3,2]
//k = 3
//output 9    [5,1,3]

// function maximumSubArraySum(arr: number[], k: number): number {
//   if (arr.length < k) return -1;
//   let left = 0;
//   let maxSum = -Infinity;
//   let windowSum = 0;

//   for (let right = 0; right < arr.length; right++) {
//     windowSum += arr[right]!;

//     if (right - left + 1 === k) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[left]!;
//       left++;
//     }
//   }
//   return maxSum;
// }

// const arr: number[] = [2, 1, 5, 1, 3, 2];
// const k: number = 3;
// console.log("maximumSubArraySum :>> ", maximumSubArraySum(arr, k));

//Question 2 — Average of All Subarrays of Size K
// const arr: number[] = [1, 3, 2, 6, -1, 4, 1, 8, 2];
// const k: number = 5;
// //output [2.2, 2.8, 2.4, 3.6, 2.8]

// function avarageSumWithK(arr: number[], k: number): number[] {
//   if (arr.length < k) return [];
//   let left = 0;
//   let windowSum = 0;
//   let result: number[] = [];
//   let avarageSum = 0;
//   for (let right = 0; right < arr.length; right++) {
//     windowSum += arr[right]!;
//     if (right - left + 1 === k) {
//       avarageSum = windowSum / k;
//       result.push(avarageSum);
//       windowSum -= arr[left]!;
//       left++;
//     }
//   }
//   return result;
// }
// console.log("avarageSumWithK :>> ", avarageSumWithK(arr, k));

//Question 3 — First Negative Number in Every Window of Size K
// const arr: number[] = [12, -1, -7, 8, -15, 30, 16, 28];
// const negative: number[] = [];
// const k: number = 3;
// //output-> [-1,-1,-7,-15,-15,0]

// function firstNagativeNumber(arr: number[], k: number): number[] {
//   if (arr.length < k) return [];
//   const ans: number[] = [];
//   let left = 0;
//   for (let right = 0; right < arr.length; right++) {
//     if (arr[right]! < 0) {
//       negative.push(arr[right]!);
//     }
//     if (right - left + 1 === k) {
//       if (negative.length > 0) {
//         ans.push(negative[0]!);
//       } else {
//         ans.push(0);
//       }

//       if (arr[left]! < 0) {
//         if (arr[left] === negative[0]) {
//           negative.shift();
//         }
//       }
//       left++;
//     }
//   }
//   return ans;
// }
// console.log("firstNagativeNumber :>> ", firstNagativeNumber(arr, k));

/*
question 4. Maximum Number of Vowels in Substring of Size K
s = "abciiidef"
k = 3
output = 3           // iii
*/

function MaximumNumberOvels(s: string, k: number): number {
  if (s.length < 3) return -1;
  let left = 0;
  let maxVowels = 0;
  let currentOwelsCount = 0;
  for (let right = 0; right < s.length; right++) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    if (vowels.has(s[right]!)) {
      currentOwelsCount++;
    }

    if (right - left + 1 === k) {
      maxVowels = Math.max(maxVowels, currentOwelsCount);
      if (vowels.has(s[left]!)) {
        currentOwelsCount--;
      }
      left++;
    }
  }
  return maxVowels;
}
console.log("MaximumNumberOvels() :>> ", MaximumNumberOvels("abciiidef", 3));
