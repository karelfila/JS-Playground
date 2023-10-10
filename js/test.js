function damageDragon(knightsDamage) {
    let dragonHealth = 100;
    let remainingHealth = dragonHealth - knightsDamage;

    if(remainingHealth > 0) {
        return "The dragon has not been slain he has " + remainingHealth + " health left."
    } else if (remainingHealth <= 0) {
        return "The dragon has been slain."
    }
}

console.log(damageDragon(100))
console.log("-------------------------------")

function emojiPicker(input) {

    if(input >= 1 && input <= 3) {
        return "😞 1st Emoji"
    } else if (input >= 4 && input <= 6) {
        return "😐 2nd Emoji"
    } else if ( input >= 7 && input <= 10) {
        return "😀 3rd Emoji"
    } else {
        return "Oops an invalid number was entered. Try entering a different number."
    }

}

console.log(emojiPicker(0))
console.log("-------------------------------")

const inventory = ['meč', 'adderall', 'lektvar', 'kouzelná hůl', 'zlatý mince'];

function showInventory(inventory) {
    inventory.forEach(item => {

        console.log(item);
    })
}
showInventory(inventory)
console.log("-------------------------------")

function addItemToInventory(item, array) {
    if(array.length >= 10) {
        console.log("There are too many items in the players inventory");
    } else {
         array.push(item)
    }

}

let itemToAdd = 'hůl nicoty'

addItemToInventory(itemToAdd, inventory)

showInventory(inventory)
console.log("-------------------------------")

function removeItemFromInventory(item, array) {

    let index = array.indexOf(item)

    return array.splice(index)

}

let itemToRemove = 'hůl nicoty'

removeItemFromInventory(itemToRemove, inventory)

showInventory(inventory)
console.log("-------------------------------")


function alphabeticalOrder(array) {
    return array.sort()
}

alphabeticalOrder(inventory)

showInventory(inventory)
console.log("-------------------------------")


const postavy = [
    { jméno: 'Aragon', třída: 'bojovník', hodnocení: 8 },
    { jméno: 'Legolas', třída: 'lučištník', hodnocení: 9 },
    { jméno: 'Gandalf', třída: 'mág', hodnocení: 10 },
    { jméno: 'Boromir', třída: 'bojovník', hodnocení: 7 },
    { jméno: 'Frodo', třída: 'hobit', hodnocení: 6 },
    { jméno: 'Sam', třída: 'hobit', hodnocení: 6 },
    { jméno: 'Pippin', třída: 'hobit', hodnocení: 5 },
    { jméno: 'Merry', třída: 'hobit', hodnocení: 5 },
    { jméno: 'Gimli', třída: 'trpaslík', hodnocení: 8 },
    { jméno: 'Sauron', třída: 'temný pán', hodnocení: 10 },
    { jméno: 'Saruman', třída: 'mág', hodnocení: 3 },
];

function getFigureFromClass(className, postavy) {

    return postavy.filter(postava => postava.třída === className)
    
}

console.log(getFigureFromClass('hobit', postavy))
console.log("-------------------------------")

function averageRating(postavy) {
    let ratingTotal = 0
    let counter = 0

    postavy.forEach(postava => {
            ratingTotal += postava.hodnocení;
            counter++
    })
    return ratingTotal / counter;
}

console.log(averageRating(postavy))
console.log("-------------------------------")

function modifyNames(postavy) {

    return postavy.map(postava => postava.jméno.toUpperCase() + "(" + (postavy.filter(postava2 => postava2.třída == postava.třída).length) + ")")
    
}

console.log(modifyNames(postavy))



