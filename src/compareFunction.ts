/* eslint-disable @typescript-eslint/no-explicit-any */
export function compareFunction(
  functionName: string,
  commonFn: () => any,
  lodashFn: () => any,
): void {
  const t0 = performance.now();
  commonFn();
  const t1 = performance.now();

  console.log(`Call to commonFn ${functionName} took ${t1 - t0} milliseconds.`);

  // Use the differenceObjectArrayByKey common function using lodash
  const t2 = performance.now();
  lodashFn();
  const t3 = performance.now();

  console.log(`Call to lodashFn ${functionName} took ${t3 - t2} milliseconds.`);
}
