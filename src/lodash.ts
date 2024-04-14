import _ from 'lodash';

export function differenceObjectArrayByKeyFromLodash<T>(
  arr1: T[],
  arr2: T[],
  key: string,
): T[] {
  return _.differenceBy(arr1, arr2, key);
}

export function uniqueObjectArrayByKeyFromLodash<T>(
  array: T[],
  key: string,
): T[] {
  return _.uniqBy(array, key);
}
