# sortByProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[]<br>): void

Re-orders `objects`, sorted by `property` in each.  
Based on the data type of `objects[0][property]`, it decides how to sort all `objects`.  
That type must be either number, string, or boolean.  Sorting is done either numerically or  
alphabetically (booleans are treated as strings).  

Note: `property` is a string that can include dot notation ( i.e.,  
`'property.subproperty.subsubproperty'` ).  
Note:  even if `property` is an array index, here you need to use dot-notation  
and not square braces, i.e., `'1.0' // instead of [1][0]`  

## Examples
```js
let objects = [
    {user: {email: 'zzz100@gmail.com', age: 55}},
    {user: {email: 'xyz100@gmail.com', age: 83}},
    {user: {email: 'xyz200@gmail.com', age: 19}},
    {user: {email: 'blah123@yahoo.com', age: 28}}
];
sortByProperty('user.email', objects);
console.log(objects);
/**************
[
    { user: { email: 'blah123@yahoo.com', age: 28 } },
    { user: { email: 'xyz100@gmail.com', age: 83 } },
    { user: { email: 'xyz200@gmail.com', age: 19 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } } 
]
**************/

sortByProperty('user.age', objects);
console.log(objects);
/**************
[
    { user: { email: 'xyz200@gmail.com', age: 19 } },
    { user: { email: 'blah123@yahoo.com', age: 28 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } },
    { user: { email: 'xyz100@gmail.com', age: 83 } }
]
**************/

// If the property is undefined in the first object, this triggers error:
objects = [
    { email: 'xyz200@gmail.com'},
    { email: 'blah123@yahoo.com', age: 28 },
    { email: 'zzz100@gmail.com', age: 55 } 
];
sortByProperty('age', objects);
// Console: "Error: The first object in the objects array either doesn't have the specified
//      property, or that property doesn't have a value."


// The following is something you need to be careful with.
// We're going to sort by 'user.age', but the value in first object will be a string,
// meaning sorting will be alphabetical:

objects = [
    {user: {email: 'blah123@yahoo.com', age: '10'}}, // string means sorting will be alphabetical.
    {user: {email: 'zzz100@gmail.com', age: 55}},
    {user: {email: 'xxx100@yahoo.com', age: 100}},
    {user: {email: 'xyz100@gmail.com', age: 20}},
    {user: {email: 'xyz200@gmail.com', age: 5}}
];
sortByProperty('user.age', objects);
console.log(objects);
/**************
[
    { user: { email: 'blah123@yahoo.com', age: '10' } },
    { user: { email: 'xxx100@yahoo.com', age: 100 } },
    { user: { email: 'xyz100@gmail.com', age: 20 } },
    { user: { email: 'xyz200@gmail.com', age: 5 } },
    { user: { email: 'zzz100@gmail.com', age: 55 } }
]
**************/
```

## Installation
```bash
npm i @writetome51/sort-by-property
```

## Loading
```js
import {sortByProperty} from '@writetome51/sort-by-property';
```
