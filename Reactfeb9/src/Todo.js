
import {useState} from "react";
function Todo(){
    let [hobby,setHobby]=useState([]);

    function addHobby(event){
        event.preventDefault();
        console.log(event);
        let formTag=event.target;
        let inputTag=formTag.hobby;
        let newHobby=[...hobby,inputTag.value]
        setHobby(newHobby);
    }
    function removeAll(){
        setHobby([]);
    }
    return(
        <div className="Todos">
            <h2>TODO APP</h2>
            <form onSubmit={addHobby}>
                <input type="text" name="hobby" placeholder=" Please Enter Your Todo Item"/><br/>
                <button>Add Todo Item</button>
            </form>
            <button onClick={removeAll}>Clear All</button>
            {hobby.map(function(val,index){
                return <div>{val}</div>
            })}
        </div>
    )
}
export default Todo;