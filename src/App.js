import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./page/Auth";
import Home from "./page/Home";

function App() {
  const user = false;
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/google/auth/login/success",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        );
        console.log(res.json());
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
    console.log(getUser);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={user ? <Navigate to="/" /> : <Auth />}
          ></Route>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
