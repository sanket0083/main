import React from "react";
import '../App.css';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import "yup-phone";


function Login() {

  
  const Validations = yup.object({
    name: yup.string().required(),
    age: yup.number().min(22).max(50).required(),
    phone: yup.string().phone().required(),
    pass: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Enter strong password"
      )
      .required(),
    gender: yup.string().required(),
    hobby: yup.array().min(1).required(),
    country: yup.string().required(),
    comment: yup.string().max(500).required(),
  });

  return (
    <div className="d-flex justify-content-center">
      <Formik
        validationSchema={Validations}
        initialValues={{
          name: "",
          age: "",
          phone:"",
          pass: "",
          gender: "",
          hobby: [],
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <h1 className="text-primary text-center mb-4 mt-3">Register Form</h1>
            <label> name : </label>&nbsp;
            <Field
            
              className={`login-input  ${touched.name && errors.name ? 'error' : ''}`}
              type="text"
              name="name" />
            <ErrorMessage className="text-danger" name="name" component="div" />

            <br /><br />
            <label> age : </label>&nbsp;
            <Field className={`login-input ${touched.age && errors.age ? 'error' : ''}`}  type="number" name="age" />
            <ErrorMessage className="text-danger" name="age" component="div" />

            
            <br /><br />
            <label> phone : </label>&nbsp;
            <Field  className={`login-input  ${touched.phone && errors.phone ? 'error' : ''}`} type="number" name="phone" />
            <ErrorMessage className="text-danger" name="phone" component="div" />

            <br /><br />
            <label> password : </label>&nbsp;
            <Field 
            className={`login-input ${touched.pass && errors.pass ? 'error' : ''}`}
             type="password" name="pass" />
            <ErrorMessage className="text-danger" name="pass" component="div" />

            <br /><br />
            <label>Gender :</label>&nbsp;&nbsp;&nbsp;
            <label>Male</label>&nbsp;
            <Field type="radio" name="gender" value="male" />
            &nbsp;&nbsp;&nbsp;
            <label>Female</label>&nbsp;
            <Field type="radio" name="gender" value="female" />
            <ErrorMessage className="text-danger" name="gender" component="div" />
            <br />
            <br />
            <label>Hobbies : </label>&nbsp;&nbsp;&nbsp;
            <label>Writing </label>&nbsp;&nbsp;
            <Field type="checkbox" name="hobby" value="writing" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>Playing </label>&nbsp;&nbsp;
            <Field type="checkbox" name="hobby" value="playing" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>Cricketing</label>&nbsp;&nbsp;
            <Field type="checkbox" name="hobby" value="Cricketing" />
            <ErrorMessage className="text-danger" name="hobby" component="div" />
            <br />
            <br />
            <label>Country : </label>&nbsp;
            <Field name="country" as="select">
              <option>select</option>
              <option value="Canada">Canada</option>
              <option value="USA">Usa</option>
              <option value="India">India</option>
            </Field>
            <ErrorMessage
              className="text-danger"
              name="country"
              component="div"
            />
            <br />
            <br />
            <label>Comments : </label>&nbsp;
            <Field as="textarea" name="comment" />
            <ErrorMessage
              className="text-danger"
              name="comment"
              component="div"
            />
            <br />
            <br />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
