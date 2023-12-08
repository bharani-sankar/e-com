import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/SignInDetails")
      .then((response) => {
        const userData = response.data;
        const user = userData.find((user) => user.email === email);

        if (user) {
          if (user.password === password) {
            alert("Login successful");
            setTimeout(() => {
              usenavigate("/home");
            }, 500);
          } else {
            alert("Incorrect password");
          }
        } else {
          alert("User not found");
        }
      })
      .catch((error) => {
        alert("Login Failed due to: " + error.message);
      });
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Email <span className="errmsg">*</span></label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary route-btn">
                Login
              </button>
              <label>Don't have an account?</label>
              <Link to="/" className="blue-text">
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;