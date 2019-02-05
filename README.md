# getSortedByProperty()

## getSortedByProperty(property: string, objects): any[]

Returns new array of <b>objects</b>, sorted by <b>property</b> in each.  
Based on the data type of <b>property</b> in the first object, it decides how to sort all the objects.  
Sorting is done either numerically or alphabetically.  
Data types of boolean and undefined are treated as strings and sorted alphabetically.  
The original <b>objects</b> array is not modified.

<b>property</b> is a string that can include dot notation  
( i.e,  'property.subproperty.subsubproperty' ) .

Note:  even if you are getting the value of an array item, here you need to use  
dot-notation and not square braces.  
Example:  if getting the first item of the first item of an array, write:  
`getSortedByProperty('0.0', arrays);  // instead of [0][0]`

## Examples
```

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
