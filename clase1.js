console.log('Hello world JS')
var name = 'José', lastname = 'Molano'
var nameUpper = name.toUpperCase()
var lastnameLower = name.toLowerCase()
var nameFirstLetter = name.charAt(0)
var nameSize = name.length
var fullName = name + ' ' + lastname
var sliceStr = name.substr(1,2)

//Text interpolation
var fullnNameInterpolated = `${name} ${lastname.toUpperCase()}`
console.log('Hello ' + name + ' ' + lastname)