import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Components.css"

export default function Usercomments(){
    const [userscomment, setUsercomment] = useState("");
    const [edit, setedit] = useState(false)

    const editbutton = () => {
        setedit(!edit)
    }

    const HandleEditButton = (id) =>{
        axios.put(`http://localhost:9292/comments/${id}`,{userscomment : userscomment})
        .then((response) => {
            console.log("Edited!")
        })
        .catch((err) => {
            err = "Something wrong happened!"
            console.log(err)
        })
    }


    const HandleDeleteButton = (id) =>{
        axios.delete(`http://localhost:9292/comments/${id}`,{userscomment : userscomment})
        .then((response) => {
            console.log("Deleted!")
        })
        .catch((err) => {
            err = "Something wrong happened!"
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get('http://localhost:9292/comments', {
        })
        .then(function (response) {
          setUsercomment(response.data)
        })
        .catch(function (error) {
          error = "Opps, there's something wrong!!!"
          console.log(error);
        });
      })
    
    return(
    <div>
        {userscomment.length > 0 && (
    <div className="comment-container">
      {userscomment.map((comments, index) => (
        <table className="styled-table">
        <thead>
        <tr>
            <th>#</th>
            <th>Comment</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tr key = {index}>
            <td>{index + 1}</td>
            <td>{comments.comment}</td>
            <td><button onClick={() => HandleEditButton(comments.id)}> Edit</button></td>
            
            <td><button onClick={() => HandleDeleteButton(comments.id)}> Delete</button></td>
        </tr>
        </table>
      ))}
    </div>
    )}
    </div>
    );
}