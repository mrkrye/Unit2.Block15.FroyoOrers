// 1. receives prompt upon opening website
// 2. type vanilla,vanilla,vanilla,strawberry,coffee,coffee
// 3. create table listing how many of each flavor was ordered
// 4. show that they have ordered 3 vanilla, 2 coffee, 1 strawberry froyo


// create prompt
const userInputString = prompt(
    "Please enter the froyo flavor you would like separated by commas. Example: vanilla, strawberry, coffee",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
)

// split input string into array of string
const stringArray = userInputString.split(",");

// declare object
const order = {};

// iterate though array of strings
for (let i=0; i < stringArray.length; i++){
    const flavor = stringArray[i];
    if (flavor in order) {
        order[flavor]++;
    }
    else {
        order[flavor] = 1;
    }
}

// display froyo order
console.log(order)


    // if (stringArray[i] === "vanilla"){
    //     order.vanilla++;
    // }
    // if (stringArray[i] === "strawberry"){
    //     order.strawberry++;
    // }
    // if (stringArray[i] === "coffee"){
    //     order.coffee++;
    // }




// // declared object and array
// let object = {}
// let stringArray = []

// // split input string into array of string
// stringArray = userInputString.split(",");

// for(let i=0; i<stringArray.length; i++){
//     if(!object[stringArray[i]]){
//         object[stringArray[i]]=1
//     }else{
//         object[stringArray[i]]+=1
//     }
// }
// console.log(object)

