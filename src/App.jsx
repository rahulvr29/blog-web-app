import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useState } from "react";
import { auth } from "./Firebase-config";
import { signOut } from "firebase/auth";

import PostDetails from "./pages/postDetails/PostDetails";

function App() {
  let saveuser = localStorage.getItem("isLoggedin");
  const [isLogged, setIsLogged] = useState(saveuser);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsLogged(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div>
      <div className="App">
        <nav>
          <Link to="/" className="logo">
            <h3>BlogDaily</h3>
          </Link>
          <ul>
            <li>
              <Link to="/" className="navlink">
                Home
              </Link>
            </li>
            <li>
              {!isLogged ? (
                <Link to="/login" className="navlink">
                  Login
                </Link>
              ) : (
                <button onClick={signUserOut} className="logoutbtn">
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/" exact element={<Home isLogged={isLogged} />} />
          <Route path="/posts" exact element={<PostDetails />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
