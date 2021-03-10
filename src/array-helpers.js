/**
 * @callback rewriteObject
 * @param {A} value
 * @template A
 */
/**
 * @param {A[]} array
 * @param {rewriteObject} fn
 * @returns {A[]}
 * @template A
 */
export function createNewArrayFromArrayObject(array, fn) {
    var newArr = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        newArr.push(fn(item));
    }
    return newArr;
}
//# sourceMappingURL=array-helpers.js.map