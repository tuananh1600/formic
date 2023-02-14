import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import addAccountSlice from "../redux/addAccountSlice";
import Eyepass from "./Eyepass";
import {
  regexAccount,
  regexEmail,
  regexPhone,
  regexPass,
} from "../regex/regexStore";
const Register = () => {
  const [typePass, setTypePass] = useState("password");
  const eyePass = () => {
    setTypePass(typePass === "password" ? "text" : "password");
  };
  const dispatch = useDispatch();
  const listAccount = useSelector((state) => state.addAccount.listAccount);
  const formik = useFormik({
    initialValues: {
      account: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      account: Yup.string()
        .required("Không được trống account")
        .matches(regexAccount, "Account không được chứa kí tự đặc biệt")
        .min(6, "Account phải trên 6 kí tự"),

      email: Yup.string()
        .matches(regexEmail, "Mail chưa hợp lệ")
        .required("Không được trống email"),

      phone: Yup.string()
        .matches(regexPhone, "Sđt không hợp lệ")
        .required("Không được trống phone"),

      password: Yup.string()
        .required("Không được trống password")
        .matches(regexPass, "Mật khẩu không hợp lệ (cần 8 kí tự,1 chữ hoa,1 kí tự đặc biệt)"),
    }),

    onSubmit: (values) => {
      let check = 0;
      listAccount.forEach((item) => {
        if (values.account === item.account) {
          check++;
        }
      });
      if (check > 0) {
        alert("Tài khoản đã có người sử dụng");
      } else {
        dispatch(addAccountSlice.actions.addAccount(values));
        alert("Đăng kí thành công");
      }
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h1>Form Register</h1>

      <input
        id="account"
        name="account"
        type="text"
        placeholder="Enter your account"
        value={formik.values.account}
        onChange={formik.handleChange}
      />
      {formik.errors.account && (
        <p style={{ color: "red" }}>{formik.errors.account}</p>
      )}

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && (
        <p style={{ color: "red" }}>{formik.errors.email}</p>
      )}

      <input
        id="phone"
        name="phone"
        type="text"
        placeholder="Enter your phone numbers"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone && (
        <p style={{ color: "red" }}>{formik.errors.phone}</p>
      )}

      <input
        id="password"
        name="password"
        type={typePass}
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Eyepass onClick={eyePass} />
      {formik.errors.password && (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      )}

      <button type="submit"> Sign Up </button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default Register;
