let user = {
    name: "Emin",
    age: 18,
    height: 184,
    weight: 63,
    location: "urgench 83",
   
 }
let phone = {
    model:'13 pro max',
    bard:'apple',
    color: 'white',
    memory: 256 ,
    price: '900$'
}
//1
let newUser = Object.assign( {}, user , {phone})
console.log(newUser);

//2
let keys = Object.keys (newUser)
console.log(keys);

//3
let values = Object.values(newUser) 
console.log(values);

//4
 let arr = keys.concat(values)
console.log(arr);

//5
let string = arr.filter(type => typeof type === "string")
let number = arr.filter(type => typeof type === "number")
let boolean = arr.filter(type => typeof type === "boolean")
console.log({string,number,boolean});