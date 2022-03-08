//map -> returns a new array
const numbers = [1,2,3]
const doubleNumArray = numbers.map((entry) => {
    return entry*2
})
console.log ("map:")
console.log (doubleNumArray)

//forEach -> do something for each element
console.log ("forEach:")
numbers.forEach ((element) => {
    console.log (element-1)
})

//find, returns first element when conditions are met
console.log ("find:")
const foundEl = numbers.find(element => element > 1)
console.log (foundEl)

//concat
console.log ("concat:")
const longArray = numbers.concat(doubleNumArray)
console.log (longArray)
//as spread function
const longArraySpread = [...numbers,...doubleNumArray]
console.log (longArraySpread)

//filter, returns all elements that fit the provided definition
console.log ("filter:")
const filteredArray = numbers.filter (element => element>2)
console.log (filteredArray)

//findIndex... it.. finds the index...
console.log ("findIndex:")
const index = numbers.findIndex(element => element>2)
console.log (index)

//slice -> creates a shallow copy of an array, you select from where to where
console.log ("slice:")
const sliceArray = longArray.slice (1,4)
console.log (sliceArray)

//splice -> remove or replace elements
console.log ("splice:")
//remove 1 element at index 1
longArray.splice(1,1)
console.log (longArray)
//insert a new element instead, not deleting anything
longArray.splice (1,0,"hi")
//insertion always takes place AFTER the selected element
console.log (longArray)
//removing from behind with negative index
longArray.splice (-1,1)
console.log(longArray)

