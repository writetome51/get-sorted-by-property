"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
var index_1 = require("./index");
var objects = [
    { user: { email: 'blah123@yahoo.com', age: 28 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } },
    { user: { email: 'xyz100@gmail.com', age: 83 } },
    { user: { email: 'xyz200@gmail.com', age: 19 } },
    { user: { email: 'xxx100@yahoo.com', age: 22 } },
    { user: { email: 'blah100@gmail.com', age: 40 } }
];
var sortedObjects = index_1.getSortedByProperty('user.email', objects);
// Test 1: make sure original objects order doesn't get modified:
var result = get_array_from_property_1.getArrayFromProperty('user.age', objects);
if (arrays_match_1.arraysMatch(result, [28, 55, 83, 19, 22, 40]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2: make sure sortedObjects are sorted alphabetically by email:
result = get_array_from_property_1.getArrayFromProperty('user.email', sortedObjects);
if (arrays_match_1.arraysMatch(result, ['blah100@gmail.com', 'blah123@yahoo.com', 'xxx100@yahoo.com', 'xyz100@gmail.com',
    'xyz200@gmail.com', 'zzz100@gmail.com']))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3: sort by age
sortedObjects = index_1.getSortedByProperty('user.age', objects);
result = get_array_from_property_1.getArrayFromProperty('user.age', sortedObjects);
if (arrays_match_1.arraysMatch(result, [19, 22, 28, 40, 55, 83]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: make sure that the data type of the first item determines the sorting method.
objects = [
    { user: { email: 'blah123@yahoo.com', age: '10' } },
    { user: { email: 'zzz100@gmail.com', age: 55 } },
    { user: { email: 'xxx100@yahoo.com', age: 100 } },
    { user: { email: 'xyz100@gmail.com', age: 20 } },
    { user: { email: 'xyz200@gmail.com', age: 5 } }
];
sortedObjects = index_1.getSortedByProperty('user.age', objects);
result = get_array_from_property_1.getArrayFromProperty('user.age', sortedObjects);
if (arrays_match_1.arraysMatch(result, ['10', 100, 20, 5, 55]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
var errorTriggered = false;
objects = [
    { user: { email: 'blah123@yahoo.com', age: 10 } },
    { user: { email: 'zzz100@gmail.com', age: '55' } },
    { user: { email: 'xxx100@yahoo.com', age: '100' } },
    { user: { email: 'xyz100@gmail.com', age: '20' } }
];
try {
    sortedObjects = index_1.getSortedByProperty('user.age', objects);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
objects = [
    { user: { email: 'blah123@yahoo.com', age: '10', male: false } },
    { user: { email: 'zzz100@gmail.com', age: 55, male: true } },
    { user: { email: 'xxx100@yahoo.com', age: 100, male: false } },
    { user: { email: 'xyz100@gmail.com', age: 20, male: true } }
];
sortedObjects = index_1.getSortedByProperty('user.male', objects);
result = get_array_from_property_1.getArrayFromProperty('user.male', sortedObjects);
if (arrays_match_1.arraysMatch(result, [false, false, true, true]))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
