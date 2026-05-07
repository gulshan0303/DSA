const bubble_sort = (arr: number[]): number[] => {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j]! > arr[j + 1]!) {
        [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

const arr: number[] = [5, 2, 9, 1, 6];
console.log("object :>> ", bubble_sort(arr));
