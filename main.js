// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log("God bless this code")
console.log(users)

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)

    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Append the katas to this element:
const main = document.querySelector('main')


// Kata 0: An example kata
// Filter the users array to show only the users with an eyeColor property of "green".

const greenEyes1 = users.filter(user => user.eyeColor === 'green')
//OR...
// const greenEyes2 = users.filter(function (user) {
//  return user.eyeColor === "green"
// })

printKata(0, greenEyes1)
// If you don't have this function already, see the "Set up" section above.

// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.

const userActive=users.filter(user=>user.isActive)

printKata(1, userActive)
//  
// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.

const showEmail=users.map(user=>user.email)

printKata(2, showEmail)  

// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".

const coProp=users.some(user=>user.company==='OVATION')

printKata(3, coProp)

//Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.

let targetAge=38
const findAge=users.find(user=>user.age>targetAge)

printKata(4, findAge)

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

let searchAge=38
const ageActive=users
.filter(user=>user.isActive)
.find(user=>user.age >searchAge)

printKata(5, ageActive)

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

let coSrch='ZENCO'
const zenBalance=users
.filter(user=>user.company===coSrch)
.map(user=>user.balance)

printKata(6, zenBalance)

// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

const fugiatAge=users
.filter(user=>user.tags.includes('fugiat'))
.map(user=>user.age)

printKata(7, fugiatAge)