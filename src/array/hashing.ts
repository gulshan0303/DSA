//duplicate detection

// const arr:number[] = [1,2,3,4]

// function duplicateValue(arr:number[]):boolean{
//     const set = new Set<number>();
//     for(let i=0;i<arr.length;i++)
//     {
//          //check if already exist or not
//          if(set.has(arr[i])){
//              return true;
//          }
//          set.add(arr[i]);
//     }
//     return false;
// }
// const output = duplicateValue(arr);
// console.log(output)

//frequency check

//  for(let i=0;i<arr.length;i++){
//       let count =0;
//       for(let j=0;j<arr.length;j++){
//           if(arr[i] ===arr[j]){
//               count++;
//           }
//       }
//     console.log(arr[i],count)
//  }

// TC - O(N^2)
//  const arr: string[] = ["apple", "banana", "apple", "mango", "banana"];
//  function frequencyCheck(arr:string[]):Map<string,number> {
//      const map = new Map<string,number>();
//      for(let num of arr){
//          map.set(num, (map.get(num) || 0) + 1);
//      }
//     return map;
//  }
//  const output = frequencyCheck(arr);
//  console.log(output)

// const str:string = "aabbccdxe"
// function findFirstNonRepating(str:string):string{
//     const map = new Map<string,number>();
//     for(let num of str){
//         map.set(num,(map.get(num)||0)+1);
//     }
//     for(let num of str){
//         if(map.get(num)===1){
//             return num;
//         }
//     }
//     return "";
// }
// const output = findFirstNonRepating(str);
// console.log(output)

const s: string = "listen";
const t: string = "sileot";
// for(let i=0;i<s.length;i++)
// {
//     for(let j=0;j<t.length;j++)
//     {
//         if(s[i]===t[j]){
//             console.log(true)
//         }
//     }
// }

function isAnagaram(s: string, t: string): boolean {
  const smap = new Map<string, number>();
  const tmap = new Map<string, number>();
  for (const char of s) {
    smap.set(char, (smap.get(char) || 0) + 1);
  }

  for (const char of t) {
    tmap.set(char, (tmap.get(char) || 0) + 1);
  }
  for (const [char, freq] of smap) {
    //if charecter mismatch
    if (!tmap.has(char)) {
      return false;
    }

    //if frequency mismatch
    if (tmap.get(char) !== freq) {
      return false;
    }
  }
  return true;
}
console.log(isAnagaram(s, t));
