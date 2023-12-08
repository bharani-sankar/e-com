import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const validationSchema = Yup.object().shape({
  id: Yup.string().required("Username is required"),
  name: Yup.string().required("Full Name is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  address: Yup.string(),
  gender: Yup.string(),
});

const initialValues = {
  id: "",
  name: "",
  password: "",
  email: "",
  phone: "",
  country: "",
  address: "",
  gender: "",
};

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {Axios.post("http://localhost:3001/SignInDetails", values)
  .then((response) => {
    console.log("Data sent successfully:", response.data);
    navigate("/login");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="container">
            <div className="card">
              <div className="card-header">
                <h1>User Registration</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>User Name <span className="errmsg">*</span></label>
                      <Field type="text" name="id" className="form-control" />
                      <ErrorMessage name="id" component="div" className="error-message errmsg" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Password <span className="errmsg">*</span></label>
                      <Field type="password" name="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="error-message errmsg" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Full Name <span className="errmsg">*</span></label>
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage name="name" component="div" className="error-message errmsg" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Email <span className="errmsg">*</span></label>
                      <Field type="text" name="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="error-message errmsg" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Phone <span className="errmsg">*</span></label>
                      <Field type="text" name="phone" className="form-control" />
                      <ErrorMessage name="phone" component="div" className="error-message errmsg"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Country <span className="errmsg">*</span></label>
                      <Field type="text" name="country" className="form-control" />
                      <ErrorMessage name="country" component="div" className="error-message errmsg" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <Field as="textarea" name="address" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Gender</label>
                      <br />
                      <Field type="radio" name="gender" value="male" className="app-check" />
                      <label>Male</label>
                      <Field type="radio" name="gender" value="female" className="app-check" />
                      <label>Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary route-btn">Register</button>
                <label>Already a user?</label>
                <Link to="/login" className="blue-text">login</Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
