// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

const minSubArrayLen = (arr: number[], target: number): number => {
  let left = 0;
  let minLength = Infinity;
  let windowSum = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]!;
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left]!;
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

const arr: number[] = [2, 3, 1, 2, 4, 3];
const target: number = 7;
const output = minSubArrayLen(arr, target);
console.log(output);
