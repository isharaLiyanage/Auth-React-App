import axios from "axios";
import React from "react";
import { useState } from "react";
import img1 from "../Asset/git.png";
import img2 from "../Asset/facebook.png";
import img3 from "../Asset/google.png";

import "../App.css";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [page, setPage] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleLogClick = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.json());
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignClick = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/auth/signIn", {
      username,
      email,
      password,
    });
    setSuccess(true);
    console.log(res);
  };
  const handleFocus = () => {
    setFocused(true);
  };
  console.log(focused);

  const google = () => {
    window.open(
      "http://localhost:5000/api/google/auth/google/callback",
      "_self"
    );
  };
  return (
    <div className="App ">
      <div className="Auth">
        <div className="change-button">
          <div
            onClick={() => {
              setPage(true);
            }}
            className={`${page ? "log" : "NOTlog"}`}
          >
            LOG IN
          </div>
          <div
            onClick={() => {
              setPage(false);
            }}
            className={`${page ? "NOTsignIn" : "signIn"}`}
          >
            SIGN IN
          </div>
        </div>

        <div className={`login ${page ? "displayNone" : "display"}`}>
          <form>
            <div className="label">
              <label htmlFor="usernameLog"> User Name</label>
              <div>
                <input
                  type="text"
                  name="usernameLog"
                  placeholder="User Name"
                  id="usernameLog"
                  pattern="^[A-Za-z0-9]{3-16}$"
                  required
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="err">
                  <p>invalid User Name</p>
                </span>
              </div>
            </div>
            <div className="label">
              <label htmlFor="passwordLog"> Password</label>

              <div>
                <input
                  type="password"
                  name="passwordLog"
                  placeholder=" Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  id="passwordLog"
                />
                <span className="err">
                  <p>invalid Password</p>
                </span>
              </div>
            </div>
            <div className="button">
              <button onClick={handleLogClick}>LOG IN</button>
            </div>
          </form>
        </div>
        <div className={`Sign ${page ? "display" : "displayNone"}`}>
          <form>
            <div className="label">
              <label htmlFor="username">User Name</label>

              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  id="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="err">
                  <p>invalid Email</p>
                </span>
              </div>
            </div>
            <div className="label">
              <label htmlFor="email"> Email</label>
              <div className="">
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  id="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="err">
                  <p>invalid Email</p>
                </span>
              </div>
            </div>
            <div className="label">
              <label htmlFor="password"> Your Password</label>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder=" Your Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />
                <span className="err">
                  <p>invalid Password</p>
                </span>
              </div>
            </div>
            <div className="label">
              <label htmlFor="password">Conform Your Password</label>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder=" Conform Password"
                  required
                  pattern={password}
                  id="password"
                />
                <span className="err">
                  <p>invalid Password</p>
                </span>
              </div>
            </div>
            <div className="button">
              <button onClick={handleSignClick}>SIGN IN</button>
            </div>
          </form>
        </div>
        <div className="or">
          <h5>OR</h5>
        </div>
        <div className="links">
          <img onClick={google} src={img3} alt="google" />
          <img onClick={google} src={img2} alt="facebook" />
          <img onClick={google} src={img1} alt="git" />
        </div>
        {success ? <h3>Done</h3> : ""}
      </div>
    </div>
  );
}

export default Auth;
