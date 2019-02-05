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
console.log(sortedObjects);
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
objects = [
    { user: { email: 'blah123@yahoo.com', age: 10 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } },
    { user: { email: 'xyz100@gmail.com', age: 83 } },
    { user: { email: 'xyz200@gmail.com', age: 19 } }
];
sortedObjects = index_1.getSortedByProperty('user.age', objects);
console.log(sortedObjects);
