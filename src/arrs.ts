export function getArrsUnion(arr1: number[], arr2: number[]): number[] {
  return Array.from(new Set([...arr1, ...arr2]));
}

export function getArrsCross(arr1: number[], arr2: number[]): number[] {
  return Array.from(new Set(arr1.filter((item) => arr2.includes(item))));
}

export function getArrsDiff(arr1: number[], arr2: number[]): number[] {
  return Array.from(
    new Set(
      getArrsUnion(arr1, arr2).filter(
        (item) => !getArrsCross(arr1, arr2).includes(item)
      )
    )
  );
}
