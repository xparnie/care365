/**
 * Find an object in arr with key equal to val
 * @param {array} arr The array of objects to search
 * @param {int} val The value to match to key
 * @param {string} key The key whose value to match against val
 * @return {object} foundObject The object whose key matches val
 */
export function searchArrayOfObjects(arr,val,key) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i][key] === val) {
      let foundObject = arr[i];
      return foundObject;
    }
  }
}

/**
 * Create comma-separated list from array
 * @param {array} arr The array of items
 * @return {string} arr The comma-separated list
 */
export const commaSeparatedListUtility = arr => {
  return arr
    .map(item => item.text)
    .reduce((prev, curr) => prev+', '+curr);
};
