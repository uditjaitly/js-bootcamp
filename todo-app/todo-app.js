let todos = []

if(localStorage.getItem('todo')!=null){
    todos=JSON.parse(localStorage.getItem('todo'))
}



const filters={
    text:"",
    completed:false
}

const todo_string=JSON.stringify(todos)
localStorage.setItem('todo',todo_string)
const ls=localStorage.getItem('user')
const ls_array=JSON.parse(ls)
console.log(ls_array)


const filteredTodos = function(todos,filters){
     const tds= todos.filter(function(todo){
        return todo.text.includes(filters.text)
    })
    console.log(tds)

    document.querySelector('#notes').innerHTML = ""
    tds.forEach(function(todo){
        if(filters.completed==false){
            if(todo.completed==false){
                td= document.createElement('p')
                td.textContent=todo.text
                document.querySelector('#notes').appendChild(td)
            }
        }
        else{
            td= document.createElement('p')
            td.textContent=todo.text
            document.querySelector('#notes').appendChild(td)
        }

    })
}

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault()
    let newtodo
    if(e.target.elements.addNote.value!=""){
        newtodo= e.target.elements.addNote.value
    }
    else{
        newtodo= "Unnamed Task"
    }
    todos.push({text:newtodo, completed:false})
    localStorage.setItem('todo',JSON.stringify(todos))
    filteredTodos(todos,filters)
})

filteredTodos(todos,filters)

document.querySelector('#cb').addEventListener('change',function(e){
    if(e.target.checked== true){
        filters.completed=true
    }
    else{
        filters.completed=false
    }
    console.log(e.target.value)
    filteredTodos(todos,filters)
})


document.querySelector('#search').addEventListener('input',function(e){
    let search=e.target.value
    console.log(search)
    filters.text=search
    filteredTodos(todos,filters)
})