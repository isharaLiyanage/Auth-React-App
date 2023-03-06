import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const handelLogOut = async () => {
    axios
      .get("http://localhost:5000/api/google/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function(response) {
        // handle successful logout
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.error(error);
      });
  };
  return (
    <div>
      WelCome To Home
      <button onClick={handelLogOut}>Log out</button>;
      <br />
      <br />
      <Link to="/auth">Log In</Link>
    </div>
  );
}

export default Home;
