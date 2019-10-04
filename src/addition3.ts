import toNumber from 'lodash.tonumber'
import flattenDeep from 'lodash.flattendeep'

/**
 * add two arbitrary values together and return the result
 * @param a first value
 * @param b second value
 */
export function addTwo(a: any, b: any): any {
  return a + b
}

/**
 * add two values together, converting them to numbers if necessary,
 * and return the result
 * @param a first value
 * @param b second value
 */
export function addTwoNumbers(a: any, b: any): number {
  return toNumber(a) + toNumber(b)
}

/**
 * add all values together, and return the aggregation result
 * @param arr values to add
 */
export function addArray(arr: Iterable<any>): any
/**
 * add all values together, and return the aggregation result
 * @param arr values to add
 */
export function addArray(...arr: any[]): any {
  const a = flattenDeep(arr)
  if (!arr.length) return 0
  let result = a[0]
  for (const item of a.slice(1)) {
    result = addTwo(result, item)
  }
  return result
}

/**
 * add all values together, converting them to numbers if necessary,
 * and return the aggregation result
 * @param arr values to add
 */
export function addArrayOfNumbers(arr: Iterable<any>): number
/**
 * add all values together, converting them to numbers if necessary,
 * and return the aggregation result
 * @param arr values to add
 */
export function addArrayOfNumbers(...arr: any[]): number {
  const a = flattenDeep(arr)
  if (!arr.length) return 0
  let result = a[0]
  for (const item of a.slice(1)) {
    result = addTwoNumbers(result, item)
  }
  return result
}
