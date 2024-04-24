/**
 * @description 获取两个数组的并集
 * @param { Array<Number> } arr1 数组1
 * @param { Array<Number> } arr2 数组2
 * @return { Array<Number> } 并集
 */

export function getArrsUnion(arr1: number[], arr2: number[]): number[] {
  return Array.from(new Set([...arr1, ...arr2]));
}

/**
 * @description 获取两个数组的交集
 * @param { Array<Number> } arr1 数组1
 * @param { Array<Number> } arr2 数组2
 * @return { Array<Number> } 交集
 */

export function getArrsCross(arr1: number[], arr2: number[]): number[] {
  return Array.from(new Set(arr1.filter((item) => arr2.includes(item))));
}

/**
 * @description 获取两个数组的差集
 * @param { Array<Number> } arr1 数组1
 * @param { Array<Number> } arr2 数组2
 * @return { Array<Number> } 差集
 */

export function getArrsDiff(arr1: number[], arr2: number[]): number[] {
  return Array.from(
    new Set(
      getArrsUnion(arr1, arr2).filter(
        (item) => !getArrsCross(arr1, arr2).includes(item)
      )
    )
  );
}
