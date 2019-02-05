import { arraysMatch } from '@writetome51/arrays-match';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';
import { getSortedByProperty } from './index';


let objects = [
	{user: {email: 'blah123@yahoo.com', age: 28}},
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xyz100@gmail.com', age: 83}},
	{user: {email: 'xyz200@gmail.com', age: 19}},
	{user: {email: 'xxx100@yahoo.com', age: 22}},
	{user: {email: 'blah100@gmail.com', age: 40}}
];

let sortedObjects = getSortedByProperty('user.email', objects);

// Test 1: make sure original objects order doesn't get modified:
let result = getArrayFromProperty('user.age', objects);
if (arraysMatch(result, [28, 55, 83, 19, 22, 40])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: make sure sortedObjects are sorted alphabetically by email:
result = getArrayFromProperty('user.email', sortedObjects);
if (arraysMatch(
	result,
	['blah100@gmail.com', 'blah123@yahoo.com', 'xxx100@yahoo.com', 'xyz100@gmail.com', 'xyz200@gmail.com', 'zzz100@gmail.com']
)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: sort by age
sortedObjects = getSortedByProperty('user.age', objects);
result = getArrayFromProperty('user.age', sortedObjects);
if (arraysMatch(result, [19, 22, 28, 40, 55, 83])) console.log('test 3 passed');
else console.log('test 3 FAILED');


objects = [
	{user: {email: 'blah123@yahoo.com', age: 28}},
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xyz100@gmail.com', age: 83}},
	{user: {email: 'xyz200@gmail.com', age: 19}},
	{user: {email: 'xxx100@yahoo.com', age: 22}},
	{user: {email: 'blah100@gmail.com', age: 40}}
];