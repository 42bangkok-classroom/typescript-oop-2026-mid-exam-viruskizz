export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const merged = [...arr1, ...arr2];
  return merged.filter((val, idx, arr) => arr.filter(x => x === val).length === 1)
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
// console.log(getUniqueNumbers(arr1, arr2))