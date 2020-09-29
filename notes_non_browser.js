let state = "Florida"
let city = "Gainesville"
let address= state + " " + city
console.log(address)

if(city=="Gainesville"){
    if(state=="Florida"){
        console.log("\nCorrect address")
    }
}
if(city=="Gainesville" && state=="Florida"){
    console.log("\nCorrect address2")

}

let check = function(){ 
    if(city=="Gainesville" && state=="Florida"){
        console.log("\nCorrect address3")
    }
}
check()

let add = function(x, y, z){
    console.log(x+y+z)
}
add(4,8,65)

let get_score= function(name="udit",score=87){
    return `${name} = ${score}`
}
console.log(get_score(undefined,undefined))

let myBook={
    title: "NodeJS",
    author: "Andrew",
    pages: 300
}

console.log(myBook.title="NODSJS TUTORIAL")
console.log(myBook.title)

let convertF = function(fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit+459.67)*(5/9),
        celsius: (fahrenheit-32)*(5/9)
    }
}
let result=convertF(71)
console.log(result)

let myAccount={
    name: "udit",
    expenses: 0,
    income: 0
}

let addExpense = function(account,expenses){
    account.expenses=account.expenses+expenses

}
let setIncome = function(account,income){
    account.income=income
}

let resetAccount=function(account){
    account.expenses=0
    account.income=0
}

let accountSummary = function(account){
    console.log(myAccount)
}
addExpense(myAccount,200)
setIncome(myAccount,5000)
accountSummary(myAccount)
resetAccount(myAccount)
accountSummary(myAccount)

let name='udit jaitly'

console.log(name.length)
console.log(name.toUpperCase())
name=name.toUpperCase()
console.log(name)
console.log(name.toLowerCase())
let password='abc1w23543password'
console.log(password.includes('password'))

let num=103.94312

console.log(num.toFixed(2))
console.log(Math.round(num))

const arr1=[1,2,3]
console.log(arr1[0])

arr1.push(4)
arr1.unshift(0)
console.log(arr1)

arr1.splice(1,1,4000)
console.log(arr1)

for(count=0;count<10;count++){
    console.log(count)
}

console.log(arr1.indexOf(4000))

const notes=[{title: "My Next Trip", body: "Spain"}, {title: "Habbits", body: "Exercise"}]

const index=notes.findIndex(function(note,index){
    return note.title == "My Next Trip"
})

console.log(index)

const findNote = function(notes, match){
    return notes.find(function(note,index){
        return note.title==match
    })
}
const note = findNote(notes, "Habbits")
console.log(note)

const todos = [{text: 'Order cat food', completed: false}, {text: "clean kitchen", completed: true}]

const completed= function(todos){
    return todos.filter(function(todo){
        return todo.completed==false
    })
}




console.log(completed(todos))

const details = [{name:"udit", rollno: 1},{name: "andrew", rollno:2},{name:"sam",rollno:3}]

let sortedDetails= function(details){
    return details.sort(function(a,b){
        if(a.rollno>b.rollno){
            return -1
        }
        else if(a.rollno<b.rollno){
            return 1
        }
    })
}
let sort=sortedDetails(details)
console.log(sort)