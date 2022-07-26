import classes from "./CreatePost.module.css";
import { addDoc, collection } from "firebase/firestore";
import { useRef } from "react";
import { db, auth }  from "../firebase-config";
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from "react";

function CreatePost() {
  const title = useRef();
  const post = useRef();
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuth")

  const collectionRef = collection(db, "posts");

  const newPostHandler = (e) => {
    e.preventDefault();

    const titleVal = title.current.value;
    const postVal = post.current.value;

    if(titleVal.trim() === "" || postVal.trim() === ""){
      alert ("please fill all fields")
      return;
    }

    const addPost = async () => {
      await addDoc(collectionRef, {
        title: titleVal,
        post: postVal,
        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
      }).then((result) => {
        console.log(result);
        navigate("/")
      })
    }
    
    addPost()

  };

  useEffect(() => {
    if(!isAuth) {navigate("/login")}
  })
  

  return (
    <div className={classes.postPage}>
      <form className={classes.postForm} onSubmit={newPostHandler}>
          <div>
            <label>Title</label><br />
            <input ref={title} name="title" type="text" placeholder='Post title..' />
          </div>
          <div>
            <label>Post</label><br />
            <textarea ref={post} name="post" rows="5" placeholder='Post title..' row="10" />
          </div>
          <div>
            <button type='submit'>Submit Post</button>
          </div>
      </form>
    </div>
  )
}

export default CreatePost