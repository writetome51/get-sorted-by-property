import {arraysMatch} from '@writetome51/arrays-match';
import {getArrayFromProperty} from '@writetome51/get-array-from-property';
import {sortByProperty} from './index.js';


let objects = [
	{user: {email: 'blah123@yahoo.com', age: 28}},
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xyz100@gmail.com', age: 83}},
	{user: {email: 'xyz200@gmail.com', age: 19}},
	{user: {email: 'xxx100@yahoo.com', age: 22}},
	{user: {email: 'blah100@gmail.com', age: 40}}
];
sortByProperty('user.email', objects);

// Test 2: make sure objects are sorted alphabetically by email:
let result = getArrayFromProperty('user.email', objects);
if (arraysMatch(
	result,
	['blah100@gmail.com', 'blah123@yahoo.com', 'xxx100@yahoo.com', 'xyz100@gmail.com',
		'xyz200@gmail.com', 'zzz100@gmail.com']
)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: sort by age
sortByProperty('user.age', objects);
result = getArrayFromProperty('user.age', objects);
if (arraysMatch(result, [19, 22, 28, 40, 55, 83])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure that the data type of the first item determines the sorting method.
// If first value is string, sorting is alphabetical no matter the data type of the following
// values:
objects = [
	{user: {email: 'blah123@yahoo.com', age: '10'}},
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xxx100@yahoo.com', age: 100}},
	{user: {email: 'xyz100@gmail.com', age: 20}},
	{user: {email: 'xyz200@gmail.com', age: 5}}
];
sortByProperty('user.age', objects);
result = getArrayFromProperty('user.age', objects);
if (arraysMatch(result, ['10', 100, 20, 5, 55])) console.log('test 4 passed');
else console.log('test 4 FAILED');


objects = [
	{user: {email: 'blah123@yahoo.com', age: 10, male: false}},
	{user: {email: 'zzz100@gmail.com', age: 55, male: true}},
	{user: {email: 'xxx100@yahoo.com', age: 100, male: false}},
	{user: {email: 'xyz100@gmail.com', age: 20, male: true}}
];
sortByProperty('user.male', objects);
result = getArrayFromProperty('user.male', objects);
if (arraysMatch(result, [false, false, true, true])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 6A: If it's an alphabetical sort, the value for a missing property will be treated as
// string 'undefined':
objects = [
	{user: {email: 'blah123@yahoo.com', age: 10, male: false}},
	{user: {email: 'zzz100@gmail.com', age: 55, male: true}},
	{user: {email: 'xxx100@yahoo.com', age: 100, male: false}},
	{user: {email: 'xyz100@gmail.com', age: 20}} // missing 'male'
];
sortByProperty('user.male', objects);
result = getArrayFromProperty('user.male', objects);
if (arraysMatch(result, [false, false, true, undefined])) console.log('test 6A passed');
else console.log('test 6A FAILED');



// Test 6B: If first value is not number, string, or boolean, this triggers error:
let errorTriggered = false;
objects = [
	{user: {email: 'blah123@yahoo.com', age: 10, male: null}},
	{user: {email: 'zzz100@gmail.com', age: 55, male: true}},
	{user: {email: 'xxx100@yahoo.com', age: 100, male: false}}
];
try{
	sortByProperty('user.male', objects);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6B passed');
else console.log('test 6B FAILED');


errorTriggered = false;
try {
	sortByProperty('', objects);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


errorTriggered = false;
try {
	sortByProperty('property', '');
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


errorTriggered = false;
try {
	sortByProperty('property', []);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');

