// For .. in loop
/*
legend:
    keyword = 'for
    var = sometemp word you use to refer to the current item
    collection = some collection you want to go through ex ... Array or Obj or String

<keyword>(<var> in <collection>){
    // Do something

}
*/

let person = {
    name: "Brad",
    age: 37
}
// A look ahead
// console.log(person.name)
// console.log(person["name"])

for(let property in person){
    console.log(property)
    console.log(person[property])
}

let randomName