/**
 * Get the difference between two arrays of objects by a key.
 * Is faster than lodash's differenceBy (key) upto around 8 times
 *
 */
export function differenceObjectArrayByKey<T>(
  arr1: T[],
  arr2: T[],
  key: string,
): T[] {
  return arr1.filter((a1) => !arr2.some((a2) => a1[key] === a2[key]));
}

/**
 * Get the uniq object data between two arrays of objects by a key.
 * Is faster than lodash's differenceBy (key) upto around 4 times until a certain amount of data, then it is slower by much more
 *
 */
export function uniqueObjectArrayByKey<T>(array: T[], key: string): T[] {
  const map = new Map<string, T>();
  array.forEach((obj) => {
    map.set(obj[key], obj);
  });

  return Array.from(map.values());
}
