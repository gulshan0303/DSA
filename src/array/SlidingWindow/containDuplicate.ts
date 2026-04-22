// input nums = [1,2,3,1],k=3
//output=true

//2 input nums = [1,0,1,1], k=2
//output = true

//3 input = [1,2,3,1,2,3], k=2
//output = false

const containDuplicateWithKsize = (nums: number[], k: number): boolean => {
  
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {

    //check duplicate values
    if (set.has(nums[i]!)) {
      return true;
    }
    set.add(nums[i]!);

    //maintain k size
    if (set.size > k) {
      set.delete(nums[i - k]!);
    }
  }

  return false;
};

//TC -> O(N)
//SC -> O(N)   N becuse using set
const arr: number[] = [1, 2, 3, 1];
const k: number = 3;
const output = containDuplicateWithKsize(arr, k);
console.log("output :>> ", output);
