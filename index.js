"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_property_1 = require("@writetome51/get-property");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var alphabetize_by_property_1 = require("@writetome51/alphabetize-by-property");
var get_in_numeric_order_by_property_1 = require("@writetome51/get-in-numeric-order-by-property");
var set_array_1 = require("@writetome51/set-array");
// Based on the data type of propertyToSortBy in the first object, it decides how to sort all objects.
// Sorting is done either numerically or alphabetically.
// data types of boolean and undefined are treated as strings.
// Returns new array.  Original is not modified.
// propertyToSortBy is a string that can contain dot-notation.
function getSortedByProperty(propertyToSortBy, objects) {
    var dataType = typeof get_property_1.getProperty(propertyToSortBy, objects[0]);
    objects = array_get_copy_1.getCopy(objects); // ensures that original array won't be modified.
    sortByDataType(dataType, objects);
    return objects;
    function sortByDataType(dataType, objects) {
        var booleanStringUndefined = ['boolean', 'string', 'undefined'];
        if (dataType === 'number')
            set_array_1.setArray(objects, get_in_numeric_order_by_property_1.getInNumericOrderByProperty(propertyToSortBy, objects));
        // @ts-ignore
        else if (booleanStringUndefined.includes(dataType))
            alphabetize_by_property_1.alphabetizeByProperty(propertyToSortBy, objects);
        else if (dataType === 'object' || dataType === 'function')
            throw new Error('This function can only sort by number, string, or boolean.');
    }
}
exports.getSortedByProperty = getSortedByProperty;
