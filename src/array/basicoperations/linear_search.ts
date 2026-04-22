const leanerSearch = (arr: number[], value: number): Boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

const arr: number[] = [1, 2, 3, 4, 5];
console.log(" leanerSearch:>> ", leanerSearch(arr, 4));
