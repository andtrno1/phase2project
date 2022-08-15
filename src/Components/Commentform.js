import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Components.css";



export default function Commentform(){
    const [comments, setComments] = useState("")
    const handleSubmit = (e) =>{
    e.preventDefault();
   
    axios.post('http://localhost:9292/comments', {
      comments: comments
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    }


    const handleComments = (e) => {
        setComments(e.target.value);
    }
    
    return(
        <div>
            <form>
                <textarea className="CommentForm" onChange={handleComments} placeholder="What's your opinion?" input="text"></textarea>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}