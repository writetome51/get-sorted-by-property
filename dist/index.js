import {errorIfLengthIsZero} from 'error-if-length-is-zero';
import {getAlphabetizedByProperty} from '@writetome51/get-alphabetized-by-property';
import {getInNumericOrderByProperty} from '@writetome51/get-in-numeric-order-by-property';
import {getProperty} from '@writetome51/get-property';


// Based on the data type of `objects[0][property]`, it decides how to sort all `objects`.
// That type must be either number, string, or boolean.  Sorting is done either numerically or
// alphabetically (booleans are treated as strings).
// Returns new array.  Original not modified.
// `property` is string that can contain dot-notation.

export function getSortedByProperty(property, objects) {
	errorIfLengthIsZero(objects);

	let dataType = typeof getProperty(property, objects[0]);
	if (dataType === 'undefined')
		throw new Error('The first object in the objects array either' +
			' doesn\'t have the specified property, or that property doesn\'t have a value.');

	return getSortedByDataType(dataType, objects);


	function getSortedByDataType(dataType, objects) {
		if (dataType === 'number')
			return getInNumericOrderByProperty(property, objects);
		// @ts-ignore
		else if (['boolean', 'string'].includes(dataType)) {
			return getAlphabetizedByProperty(property, objects);
		}
		else throw new Error('This function can only sort by number, string, or boolean.');
	}
}
