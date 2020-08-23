import { alphabetize } from '@writetome51/alphabetize';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';
import { getProperty } from '@writetome51/get-property';
import { orderNumerically } from '@writetome51/order-numerically';
// Based on the data type of `objects[0][property]`, it decides how to sort all `objects`.
// That type must be either number, string, or boolean.  Sorting is done either numerically or
// alphabetically (booleans are treated as strings).
// `property` is string that can contain dot-notation.
export function sortByProperty(property, objects) {
    errorIfLengthIsZero(objects);
    let dataType = typeof getProperty(property, objects[0]);
    if (dataType === 'undefined')
        throw new Error('The first object in the objects array either' +
            ' doesn\'t have the specified property, or that property doesn\'t have a value.');
    sortByDataType(dataType, objects);
    function sortByDataType(dataType, objects) {
        if (dataType === 'number')
            __sortByProperty(property, orderNumerically);
        // @ts-ignore
        else if (['boolean', 'string'].includes(dataType))
            __sortByProperty(property, alphabetize);
        else
            throw new Error('This function can only sort by number, string, or boolean.');
        function __sortByProperty(property, sortFunction) {
            sortFunction(objects, (obj) => getProperty(property, obj));
        }
    }
}
