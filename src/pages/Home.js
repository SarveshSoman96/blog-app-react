import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc , doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import classes from "./Home.module.css";
// import { Scrollbars } from "react-custom-scrollbars-2";

function Home() {
  const [postList, setPostList] = useState([]);
  const collectionRef = collection(db, "posts");
  let isAuth = localStorage.getItem("isAuth");
  

  useEffect(() => {

    const getPost = async () => {
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };
    
    getPost()
  
  })

  const deleteDocHandler = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc).catch(err => console.log(err));
  };
  
  return (
    <div className={classes.homepage}>
      {postList.map((post) => (
        <div className={classes.postContainer}>
          <div className={classes.postHeading}>
            <h2 key={post.id}>{post.title}</h2>
            <div className={classes.icons}>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <>
                    <button> &#9998; </button>
                    <button
                      onClick={() => {
                        deleteDocHandler(post.id);
                      }}
                    >&#128465;
                    </button>
                    </>
                  )}
            </div>
          </div>

          <div className={classes.description}>
            <p>{post.post}</p>
          </div>
          <span>{`@${post.author.name}`}</span>
        </div>
      ))}
    </div>
  );
}

export default Home