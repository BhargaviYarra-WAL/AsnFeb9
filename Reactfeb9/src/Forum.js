import { useState } from "react";
let Forum = (props) => {
    let [forum, setForum] = useState([{author:"Bhargavi",reply:"Javascript library" }]);
    let addForum = (event) => {
        event.preventDefault();
        let forumOb = {
            author: event.target.author.value,
            reply: event.target.reply.value
        }
        let newOb=[...forum,forumOb]
        setForum(newOb);
    }
    let deleteForum= (indexToDelete) => {
        let newForum = forum.filter(function (val, index) {
            if (indexToDelete == index) {
                return false;
            }
            else {
                return true;
            }
        })
        setForum(newForum);
    }
    return (
        <div className="Forum">
            <h2>Forum </h2>
            <h4>Topic is: {props.topic}</h4>
            <form onSubmit={addForum}>
                <input type="text" name="author" placeholder="Author Name" /><br/>
                <textarea type="text" name="reply" placeholder="Enter Your Reply" ></textarea><br/>
                <button className="btn" >Add Your Reply</button>
            </form>
            <div>
                <table className="demo">
                    <tr>
                        <th>Author</th>
                        <th>Reply</th>
                        <th>Delete</th>
                    </tr>
                {forum.map(function (value, index) {
                    return (
                        <tr>
                            <td>{value.author}</td>
                            <td>{value.reply}</td>
                            <td><button className="btn" onClick={() => deleteForum(index)}>Delete Reply</button></td>
                        </tr>                        
                    )
                })}
                </table>
            </div>
        </div>
    )
}
export default Forum;
