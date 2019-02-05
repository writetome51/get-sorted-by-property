# getSortedByProperty()

## getSortedByProperty(property: string, objects): any[]

Returns new array of <b>objects</b>, sorted by <b>property</b> in each.  
<u>Based on the data type of <b>property</b> in the first object, it decides how to sort all the 
objects.</u>  
If the data type is string or boolean, <b>objects</b> are sorted alphabetically.  
If the data type is number, <b>objects</b> are sorted numerically.  
The original <b>objects</b> array is not modified.

<b>property</b> is a string that can include dot notation ( i.e,  'property.subproperty.subsubproperty' ) .  
Note:  even if you are getting the value of an array item, here you need to use dot-notation and not  
square braces.  
Example:  if getting the first item of the first item of an array, write:  
`getSortedByProperty('0.0', arrays);  // instead of [0][0]`

## Examples
```
let objects: any[] = [
	{user: {email: 'blah123@yahoo.com', age: 28}},
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xyz100@gmail.com', age: 83}},
	{user: {email: 'xyz200@gmail.com', age: 19}},
	{user: {email: 'xxx100@yahoo.com', age: 22}},
	{user: {email: 'blah100@gmail.com', age: 40}}
];

let sortedObjects = getSortedByProperty('user.email', objects);

/**************
sortedObjects is:
[
    { user: { email: 'blah100@gmail.com', age: 40 } },
    { user: { email: 'blah123@yahoo.com', age: 28 } },
    { user: { email: 'xxx100@yahoo.com', age: 22 } },
    { user: { email: 'xyz100@gmail.com', age: 83 } },
    { user: { email: 'xyz200@gmail.com', age: 19 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } } 
]
**************/


sortedObjects = getSortedByProperty('user.age', objects);

/**************
sortedObjects is:
[
    { user: { email: 'xyz200@gmail.com', age: 19 } },
    { user: { email: 'xxx100@yahoo.com', age: 22 } },
    { user: { email: 'blah123@yahoo.com', age: 28 } },
    { user: { email: 'blah100@gmail.com', age: 40 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } },
    { user: { email: 'xyz100@gmail.com', age: 83 } }
]
**************/


// The following scenario is something you need to be careful with.
// We're going to sort by 'user.age', but the value in first item will be a string.
// This means sorting will be alphabetical, so all the number values in the 
// subsequent items will be treated as strings:

objects = [
	{user: {email: 'blah123@yahoo.com', age: '10'}}, // string means sorting will be alphabetical.
	{user: {email: 'zzz100@gmail.com', age: 55}},
	{user: {email: 'xxx100@yahoo.com', age: 100}},
	{user: {email: 'xyz100@gmail.com', age: 20}},
	{user: {email: 'xyz200@gmail.com', age: 5}}
];
sortedObjects = getSortedByProperty('user.age', objects);

/**************
sortedObjects is:
[
    { user: { email: 'blah123@yahoo.com', age: '10' } },
    { user: { email: 'xxx100@yahoo.com', age: 100 } },
    { user: { email: 'xyz100@gmail.com', age: 20 } },
    { user: { email: 'xyz200@gmail.com', age: 5 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } }
]
**************/


// The following scenario will cause an error.
// Again we're going to sort by 'user.age':

objects = [
	{user: {email: 'blah123@yahoo.com', age: 10}}, // number means sorting will be numeric...
	{user: {email: 'zzz100@gmail.com', age: '55'}}, // ...but since the numbers in the following items
	{user: {email: 'xxx100@yahoo.com', age: '100'}}, // are actually strings, that will trigger error.
	{user: {email: 'xyz100@gmail.com', age: '20'}}
];
sortedObjects = getSortedByProperty('user.age', objects);
// Console: 'Error: the array contains a value that is not a number.'
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/get-sorted-by-property
```

## Loading
```
// If using TypeScript:
import {getSortedByProperty} from '@writetome51/get-sorted-by-property';
// If using ES5 JavaScript:
var getSortedByProperty = require('@writetome51/get-sorted-by-property').getSortedByProperty;
```
