// Array review

let demoArr = []
for(let i = 1; i <= 100; i++){
    demoArr.push(i)
}

let checkEven = (num) => {
    return num % 2 === 0
}

console.log(demoArr);
console.log(demoArr.filter(elem => elem % 2 == 0))

let splitArr = []
for(let z = 1; z <= 100; z++){
    if(z % 2 == 0) {
        splitArr.push(z)
    }else{
        splitArr.unoshift(z)
    }
}
console.log(splitArr)


console.log(splitArr)
for(let curNum of splitArr){
    console.log(curNum)
}
//