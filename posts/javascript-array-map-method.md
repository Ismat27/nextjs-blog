---
title: 'JavaScript Array Map Method'
date: '2023-03-08'
intro: The map method of a javaScript array execute a function on every element of an array to produce a new array. Let's further explore this method in this tutorial
---

In this tutorial we are going to learn about the `map` method of `javaScript array`.
Consider the below block of code:

```js
const array_1 = [1, 2, 3]
const array_2 = []
for (let i = 0; i<array_1.length; i++) {
    array_2[i] = array_1[i] * 2
}
console.log(array_2)
// output
[ 2, 3, 6 ]
```

Here, the elements of `array_2` were derived by multiplying corresponding element of `array_1` by 2.

This is exactly the function of the array `map` method, which is to form a new array by iterating over an existing array then performing an action on the corresponding elements of the existing array.

The above block of code to generate elements of `array_2` from `array_1` could be written as shown below:

```js
const array_1 = [1, 2, 3]
const array_2 = array_1.map(x => x * 2)
```

## How to use It

There are different approaches to using the `map` method but basically the method takes in a compulsory callback function, `callbackfn` as its first argument and an optional `thisValue` to be used as the value of `this` when executing the `callbackFn`. It calls this callback function on every element of an existing array to produce corresponding element of a new array. The `map` makes available for the callback function three arguments on each call/iteration and hence the callback function can take up to three arguments as listed out below:

- `currentValue`: This is the current element value of the existing array during each iteraion
- `currentIndex`: This is the index of current element of the existing array during each iteration
- `array`: The existing array

The first argument, `currentValue` is required while the other two arguments are optional. The first two are probably what you will work with most of the time

To understand this better let's rewrite our initial block of code as below:

```js
const array_1 = [1, 2, 3]
const array_2 = []
for (let i = 0; i<array_1.length; i++) {
    const currentValue = array_1[i] // this corresponds to the currentValue at any instance of iteration
    const currentIndex = i  // while this corresponds to the currentIndex at any instance of iteration
    array_2[i] = array_1[i] * 2
}
console.log(array_2)
```

### Examples

```js
const records = [
    {
        firstName: 'Michael',
        lastName: 'Abobade',
        favLanguage: 'python',
    },
    {
        firstName: 'Precious',
        lastName: 'Peter',
        favLanguage: 'PHP',
    },
    {
        firstName: 'Hussein',
        lastName: 'Muhammed',
        favLanguage: 'JavaScript',
    },
]
```

```js
function getNames(record) {
    return `${record.firstName} ${record.lastName}`
}
```

```js
// This returns array of fullnames 
const fullNames = records.map(getNames)
```

The method can also take in an `inline function`

```js
// This returns array of firstNames
const firstNames = records.map((record) => {
    return record.firstName
})
```

```js
console.log(records.map(record => record.lastName))
// this logs out [ 'Abobade', 'Peter', 'Muhammed' ]
```

```js
const newRecord = records.map(function(record, index) {
    return {
        position: index + 1,
        name: record.firstName + " " + record.lastName,
        language: record.favLanguage,
    }
})
// or this
const anotherWay = records.map((record, index) => {
    return {
        position: index + 1,
        name: record.firstName + " " + record.lastName,
        language: record.favLanguage,
    }
})
```

Logging out `newRecord` or `anotherWay` will produce

```js
[
  { position: 1, name: 'Michael Abobade', language: 'python' },
  { position: 2, name: 'Precious Peter', language: 'PHP' },
  { position: 3, name: 'Hussein Muhammed', language: 'JavaScript' }
]
```

The `map` method is essential for every JavaScript developer to master. For example it comes very handy when forming `React`  components from a list of data items. The below is a very common example.

```js
function Records() => {
    return (
        <>
            {
                records.map((record, i) => {
                    const fullName = `${record.firstName} ${record.lastName}`
                    return (
                        <article key={i}> // the key will usually be a unique identifier other than the currentIndex
                            <h3>Name: {fullName}</h3>
                            <p>Favorite Language: {record.favLanguage}</p>
                        </article>
                    )
                })
            }
        </>
    )
}
```

It is also handy when an array of data (probably database query) needed to be modified before returning to the frontend as a part of body response.
