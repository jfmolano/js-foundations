//Class 2 - Strings - - - - - - - - 
console.log('Hello world JS')
var name = 'José', lastname = 'Molano'
var nameUpper = name.toUpperCase()
var lastnameLower = name.toLowerCase()
var nameFirstLetter = name.charAt(0)
var nameSize = name.length
var fullName = name + ' ' + lastname
var sliceStr = name.substr(1,2)

//Text interpolation: you can insert js code!
var fullnNameInterpolated = `${name} ${lastname.toUpperCase()}`
console.log('Hello ' + name + ' ' + lastname)


//Class 3 - Numbers - - - - - - - - 
var age = 25
age = age + 1
age += 1

var sand = 10
age += sand

var price = 200.3
var total = price*3
// Result: 600.9000000000001

var price = 200.3
var total = price*100*3/100

// Round numbers
var priceRounded = Math.round(price)

// Fixed decimals
var priceRoundedStr = priceRounded.toFixed(2)

// Parse float
var price2 = parseFloat(priceRoundedStr)

var pizza = 8
var people = 2
var portions = pizza / people

//Class 4 - Functions - - - - - - - - 


