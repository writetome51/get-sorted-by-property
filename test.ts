import { arraysMatch } from '@writetome51/arrays-match';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';
import { getSortedByProperty } from './index';


let objects: any[] = [
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
	['blah100@gmail.com', 'blah123@yahoo.com', 'xxx100@yahoo.com', 'xyz100@gmail.com',
		'xyz200@gmail.com', 'zzz100@gmail.com']
)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: sort by age
sortedObjects = getSortedByProperty('user.age', objects);
result = getArrayFromProperty('user.age', sortedObjects);
if (arraysMatch(result, [19, 22, 28, 40, 55, 83])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure that the data type of the first item determines the sorting method.
objects = [
	{user: {email: 'blah123@yahoo.com', age: '10'}}, // string means sorting is alphabetical.
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xxx100@yahoo.com', age: 100}},
	{user: {email: 'xyz100@gmail.com', age: 20}},
	{user: {email: 'xyz200@gmail.com', age: 5}}
];
sortedObjects = getSortedByProperty('user.age', objects);
result = getArrayFromProperty('user.age', sortedObjects);
if (arraysMatch(result, ['10', 100, 20, 5, 55])) console.log('test 4 passed');
else console.log('test 4 FAILED');


let errorTriggered = false;
objects = [
	{user: {email: 'blah123@yahoo.com', age: 10}}, // number means sorting will be numeric...
	{user: {email: 'zzz100@gmail.com', age: '55'}}, // ...but if the numbers in the following items
	{user: {email: 'xxx100@yahoo.com', age: '100'}}, // are actually strings, that will trigger error.
	{user: {email: 'xyz100@gmail.com', age: '20'}}
];
try {
	sortedObjects = getSortedByProperty('user.age', objects);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


objects = [
	{user: {email: 'blah123@yahoo.com', age: '10', male: false}},
	{user: {email: 'zzz100@gmail.com', age: 55, male: true}},
	{user: {email: 'xxx100@yahoo.com', age: 100, male: false}},
	{user: {email: 'xyz100@gmail.com', age: 20, male: true}}
];
sortedObjects = getSortedByProperty('user.male', objects);
result = getArrayFromProperty('user.male', sortedObjects);
if (arraysMatch(result, [false, false, true, true])) console.log('test 6 passed');
else console.log('test 6 FAILED');