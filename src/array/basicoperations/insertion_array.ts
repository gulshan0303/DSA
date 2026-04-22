const insertAt = (arr: number[], index: number, value: number): number[] => {
  if (index < 0 || index > arr.length) throw new Error("Invalid index");

  for (let i = arr.length; i > index; i--) {
    arr[i]! = arr[i - 1]!;
  }
  arr[index] = value;
  return arr;
};

const arr = [10, 20, 30];
console.log("object :>> ", insertAt(arr, 3, 15));
