const binarySearch = (arr: number[], target: number): Boolean => {
  let left = 0!;
  let right = arr.length - 1!;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return true;
    else if (arr[mid]! < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

const arr: number[] = [1, 2, 3, 4, 5];
console.log("object :>> ", binarySearch(arr, 1));
