const todos = [{text: 'Order cat food',
         completed: false}, 
         {text: "clean kitchen", 
         completed: true}, 
        {text : "Groceries", completed : false}]

const filters={
    text:""
}

const filteredTodos = function(todos,search){
     const tds= todos.filter(function(todo){
        return todo.text.includes(search)
    })
    console.log(tds)

    document.querySelector('#notes').innerHTML = ""
    tds.forEach(function(todo){
        if(todo.completed==false && search!=""){
            td= document.createElement('p')
            td.textContent=todo.text
            document.querySelector('#notes').appendChild(td)
        }

    })
}
console.log(filteredTodos)


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

document.querySelector('#search').addEventListener('input',function(e){
    let search=e.target.value
    console.log(search)
    filters.text=search
    filteredTodos(todos,search)
})