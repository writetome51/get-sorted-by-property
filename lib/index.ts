import { alphabetizeByProperty } from '@writetome51/alphabetize-by-property';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';
import { getArrayCopy } from '@writetome51/get-array-copy';
import { getInNumericOrderByProperty } from '@writetome51/get-in-numeric-order-by-property';
import { getProperty } from '@writetome51/get-property';
import { setArray } from '@writetome51/set-array';


// Based on the data type of `objects[0][property]`, it decides how to sort all objects.
// Sorting is done either numerically or alphabetically.
// Data types 'boolean' and 'undefined' are treated as strings.
// Returns new array.  Original not modified.
// `property` is string that can contain dot-notation.

export function getSortedByProperty(property, objects): object[] {
	errorIfLengthIsZero(objects);

	let dataType = typeof getProperty(property, objects[0]);
	if (dataType === 'undefined') throw new Error('The first object in the objects array either' +
		' doesn\'t have the specified property, or that property doesn\'t have a value.');

	objects = getArrayCopy(objects); // so original won't be modified.
	sortByDataType(dataType, objects);
	return objects;


	function sortByDataType(dataType, objects) {
		if (dataType === 'number') setArray(objects, getInNumericOrderByProperty(property, objects));
		// @ts-ignore
		else if (['boolean', 'string'].includes(dataType)) alphabetizeByProperty(property, objects);
		else throw new Error('This function can only sort by number, string, or boolean.');
	}
}
