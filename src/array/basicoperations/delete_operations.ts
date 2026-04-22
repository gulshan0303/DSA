const detateAt = (arr: number[], index: number): number[] => {
  //base case
  if (index < 0 || index > arr.length) throw new Error("Invalid index");
  for (let i = index; i < arr.length; i++) {
    //left shift
    arr[i]! = arr[i + 1]!;
  }
  //duplicate value
  arr.length = arr.length - 1;
  return arr;
};
const arr: number[] = [1, 2, 3, 4, 5];
console.log("object :>> ", detateAt(arr, 1));
