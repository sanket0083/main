import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

function Login() {
  const Validations = yup.object({
    name: yup.string().required(),
    age: yup.number().min(22).max(50).required(),
    pass: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Enter strong password")
      .required(),
    gender: yup.string().required(),
    hobby: yup.array().min(1).required(),
    country: yup.string().required(),
    comment: yup.string().max(500).required(),
  });

  return (
    <div>
      <Formik
        validationSchema={Validations}
        initialValues={{
          name: "",
          age: "",
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
        <Form>
          <label>Enter name : </label>&nbsp;
          <Field type="text" name="name" />
          <ErrorMessage className="text-danger" name="name"  component="div"/>
          <br />
          <br />
          <label>Enter age : </label>&nbsp;
          <Field type="number" name="age" />
          <ErrorMessage className="text-danger" name="age" component="div" />
          <br />
          <br />
          <label>Enter password : </label>&nbsp;
          <Field type="password" name="pass" />
          <ErrorMessage className="text-danger" name="pass"  component="div"/>
          <br />
          <br />
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
          <ErrorMessage className="text-danger" name="hobby"  component="div"/>
          <br />
          <br />
          <label>Country : </label>&nbsp;
          <Field name="country" as="select">
            <option>select</option>
            <option value="Canada">Canada</option>
            <option value="USA">Usa</option>
            <option value="India">India</option>
          </Field>
          <ErrorMessage className="text-danger" name="country" component="div" />
          <br />
          <br />
          <label>Comments : </label>&nbsp;
          <Field as="textarea" name="comment" />
          <ErrorMessage className="text-danger" name="comment" component="div" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
