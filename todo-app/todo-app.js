const todos = [{text: 'Order cat food',
         completed: false}, 
         {text: "clean kitchen", 
         completed: true}, 
        {text : "Groceries", completed : false}]


let count = 0
todos.forEach(function(todo,index){
    if(todo.completed==false){
        count++
    }
})

const heading = document.createElement('h2')
heading.textContent=`You have tasks ${count} remaining`
document.querySelector('body').appendChild(heading)

todos.forEach(function(todo,index){
    if(todo.completed==false){
        const todotext=document.createElement('p')
        todotext.textContent=todo.text
        document.querySelector('body').appendChild(todotext)
    }
})

//document.querySelector('button').addEventListener('click',function(e){
//    e.target.textContent='Clicked it'
//})

document.querySelector('#add-note').addEventListener('click',function(){
    const newnote= document.createElement('p')
    newnote.textContent='New Note'
    document.querySelector('body').appendChild(newnote)
})

document.querySelector('.remove-note').addEventListener('click',function(){
    const pl= document.querySelectorAll('p')
    pl.forEach(function(p){
        p.remove()
    })
})