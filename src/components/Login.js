import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Eyepass from "./Eyepass";
const Login = () => {
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");
  const [typePass, setTypePass] = useState("password");
  const eyePass = () => {
    setTypePass(typePass === "password" ? "text" : "password");
  };
  const listAccount = useSelector((state) => state.addAccount.listAccount);
  const handleSubmit = (event) => {
    event.preventDefault();
    let check = 0;
    listAccount?.forEach((item) => {
      if (account === item.account && pass === item.password) {
        check++;
      }
    });
    if (check > 0) {
      alert("Đăng nhập thành công");
    } else if (check === 0 && account.length > 0 && pass.length > 0) {
      alert("Đăng nhập thất bại");
    } else {
      alert("Bạn cần nhập đủ thông tin");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Form Login</h1>

      <input
        onChange={(e) => {
          setAccount(e.target.value);
        }}
        placeholder="Enter your account"
      ></input>
      <input
        type={typePass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="Enter your password"
      ></input>
      <Eyepass onClick={eyePass} />

      <button>Login</button>
      <Link to="/">Register</Link>
    </form>
  );
};

export default Login;
