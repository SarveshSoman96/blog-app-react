import classes from "./Login.module.css";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result)
      localStorage.setItem("isAuth", true)
      navigate("/createpost")
    })
  };

  return (
    <div className={classes['login-container']}>
      <div className={classes.loginPage}>
        <h2 className={classes["login-heading"]}>Log In to your account</h2>
        <button className={classes['google-login']} onClick={signInWithGoogle}>Sign in with google</button>
      </div>
    </div>
    
  )
}

export default Login