import axios from "axios";
import React, { useEffect } from "react";

function Home() {
  const handelLogOut = async () => {
    axios
      .get("http://localhost:5000/api/google/auth/logout")
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
    </div>
  );
}

export default Home;
