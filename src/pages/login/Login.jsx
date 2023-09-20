import "./login.styles.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogged }) => {
  let navigate = useNavigate();

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isLoggedin", true);
      setIsLogged(true);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <h1>Blog Daily Login</h1>
      <p className="text">
        To keep connected with us please login with your personal info with
        google
      </p>
      <button className="buttonStyles" onClick={LoginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
