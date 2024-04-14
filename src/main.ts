import {
  differenceObjectArrayByKey,
  uniqueObjectArrayByKey,
} from './common.js';
import { compareFunction } from './compareFunction.js';
import { array1, array2, randomArray } from './exampleConstant.js';
import {
  differenceObjectArrayByKeyFromLodash,
  uniqueObjectArrayByKeyFromLodash,
} from './lodash.js';

// Use the differenceObjectArrayByKey common function using native JavaScript/Typescript

compareFunction(
  'differenceObjectArrayByKey',
  () => differenceObjectArrayByKey(array1, array2, 'id'),
  () => differenceObjectArrayByKeyFromLodash(array1, array2, 'id'),
);

compareFunction(
  'uniqueObjectArrayByKey',
  () => uniqueObjectArrayByKey(randomArray, 'id'),
  () => uniqueObjectArrayByKeyFromLodash(randomArray, 'id'),
);
