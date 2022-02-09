import { useState } from "react";
const TodoApp=()=>{
    let [todos,setTodos]=useState([{item:"cook breakfast",status:"complete"},
    {item:"do coding",status:"incomplete"}])
    let addTodo=(event)=>{
        event.preventDefault();
        let todoObject={
            item:event.target.item.value,
            status:event.target.status.value
        };
        let newTodos=[...todos,todoObject];
        setTodos(newTodos);
    }
    let deleteTodo=(indexToDelete)=>{
        let newTodos=todos.filter(function(val,index){
            if(indexToDelete==index){
                return false;
            }return true
        })
        setTodos(newTodos)
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="item"/>
                <select name="status">
                    <option value="complete">complete</option>
                    <option value="incomplete">incomplete</option>

                </select>
                <button >add</button>

            </form>
            {todos.map((val,index)=>{
                return(
                    <div>
                        status:{val.status}<br/>
                        todo:{val.item}
                        <button onClick={()=>deleteTodo(index)}>delete</button>
                    </div>
                )
            })

            }
            
        </div>
    )
}
export default TodoApp;