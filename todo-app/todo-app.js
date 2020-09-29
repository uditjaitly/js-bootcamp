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

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    const newtodo= e.target.elements.addNote.value
    todos.push({text:newtodo, completed:false})
})



document.querySelector('#search').addEventListener('input',function(e){
    let search=e.target.value
    console.log(search)
    filters.text=search
    filteredTodos(todos,search)
})