const insertion_sort = (arr: number[]): number[] => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j]! > arr[minIndex]!) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      //swap the value
      [arr[i], arr[minIndex]] = [arr[minIndex]!, arr[i]!];
    }
  }
  return arr;
};

const arr: number[] = [5, 2, 9, 1, 6];
console.log("arr :>> ", arr);
console.log("object :>> ", insertion_sort(arr));
