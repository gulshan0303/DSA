const arr: number[] = [2, 7, 11, 15];
const target: number = 9;

// function twoSum(arr: number[]): number[] {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i]! + arr[j]! === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }

//TC -> O(N)
//SC -> O(1)

//Optimise Version
function twoSum(arr: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i]!;
    //check exsting compliment
    //example  9-2 = 7   // its not store in map
    if (map.has(compliment)) {
      return [map.get(compliment)!, i];
    }
    map.set(arr[i]!, i);
    // set 2 in map that means return 0 index
  }
  return [];
}

const output = twoSum(arr, target);

console.log(output);
