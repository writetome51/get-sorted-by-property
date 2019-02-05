import { getProperty } from '@writetome51/get-property';
import { getCopy } from '@writetome51/array-get-copy';
import { alphabetizeByProperty } from '@writetome51/alphabetize-by-property';
import { getInNumericOrderByProperty } from '@writetome51/get-in-numeric-order-by-property';
import { setArray } from '@writetome51/set-array';

// Based on the data type of propertyToSortBy in the first object, it decides how to sort all objects.
// Sorting is done either numerically or alphabetically.
// data types of boolean and undefined are treated as strings.
// Returns new array.  Original is not modified.
// propertyToSortBy is a string that can contain dot-notation.


export function getSortedByProperty(propertyToSortBy, objects): any[] {
	let dataType = typeof getProperty(propertyToSortBy, objects[0]);
	objects = getCopy(objects); // ensures that original array won't be modified.
	sortByDataType(dataType, objects);
	return objects;


	function sortByDataType(dataType, objects) {
		let booleanStringUndefined = ['boolean', 'string', 'undefined'];
		if (dataType === 'number')
			setArray(objects, getInNumericOrderByProperty(propertyToSortBy, objects));
		// @ts-ignore
		else if (booleanStringUndefined.includes(dataType))
			alphabetizeByProperty(propertyToSortBy, objects);
		else if (dataType === 'object' || dataType === 'function')
			throw new Error('This function can only sort by number, string, or boolean.');
	}
}
