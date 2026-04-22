const updateAt = (arr: number[], index: number, value: number): number[] => {
  if (index < 0 || index > arr.length) throw new Error("Invalid index");
  arr[index] = value;
  return arr;
};
const arr: number[] = [1, 2, 3, 4, 5];
console.log("object :>> ", updateAt(arr, 0, 100));
