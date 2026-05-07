const arr: number[] = [9, 8, 11, 2, 5, 7];

const differenceBetweenMaxToMin = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let max = arr[0]!;
  let min = arr[0]!;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! > max) max = arr[i]!;
    if (arr[i]! < min) min = arr[i]!;
  }

  return max - min;
};

const output = differenceBetweenMaxToMin(arr);
console.log("output :>> ", output); // output :>> 9
