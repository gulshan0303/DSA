const maxSumWithKSize = (arr: number[], k: number): number => {
  if (k > arr.length) throw new Error("Invalid k");

  let windowSum = 0;
  let left = 0;
  let maxSum = -Infinity;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]!;
    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[left]!;
      left++;
    }
  }
  return maxSum;
};

const arr: number[] = [2, 1, 5, 1, 3, 2];
const k: number = 3;
const output = maxSumWithKSize(arr, k);
console.log(output);
