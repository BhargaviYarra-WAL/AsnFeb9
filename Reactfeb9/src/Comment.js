import { useState } from "react";
const Comment=()=>{
    let [comment,setComment]=useState([])
    let addComment=(event)=>{
        event.preventDefault();
        let commentObject={
            title:event.target.title.value,
            body:event.target.body.value,
            name:event.target.name.value,
            submitdate:event.target.submitdate.value
        };
        let newComment=[...comment,commentObject];
        setComment(newComment);
    }
    let deleteComment=(indexToDelete)=>{
        let newComment=comment.filter(function(val,index){
            if(indexToDelete==index){
                return false;
            }return true
        })
        setComment(newComment)
    }
    return (
        <div className="Comment">
            <h2>Comment Section</h2>
            <form onSubmit={addComment}>
                <input type="text" name="title" placeholder="Comment Title"/><br/>
                <textarea type="text" name="body" placeholder="Comment body"></textarea><br/>
                <input type="text" name="name" placeholder="Author Name"/><br/>
                <input type="date" name="submitdate"/><br/>
                <button className="btn" >Add Comment</button><br/>
            </form>
            {comment.map((val,index)=>{
                return(
                    <div className="Border">
                      Title:{val.title}<br/>
                       Body:{val.body}<br/>
                       AuthorName:{val.name}<br/>
                       SubmitDate:{val.submitdate}<br/> 
                       <button className="btn" onClick={()=>deleteComment(index)}>delete</button>  
                    </div>
                )
            })
            }   
        </div>
    )
}
export default Comment;
