import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import '../App.css';
import * as yup from 'yup';
import "yup-phone";


const About = () => {
  const validations = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
    gender: yup.string().required(),
    date: yup.date().required(),
    phone: yup.string().phone().required(),
    cover: yup.string().max(500).required(),
    city: yup.string().required(),
    check: yup.array().min(1).required(),
    

  })
  return (
    <div className="d-flex justify-content-center">

      <Formik
        validationSchema={validations}
        initialValues={{ name: "", address: "", email: "",gender:"",date: "",  phone: "", cover: "", city:"",check:[],}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            
            <h1 className="text-primary text-center mb-4 mt-3">Doctor Appointment Form</h1>
            <label>Full Name : </label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.name && errors.name ? 'error' : ''}`} type="text" name="name" />
            <ErrorMessage className='text-danger' name='name' component='div' />
            <br />

            <label>Current Address :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.address && errors.address ? 'error' : ''}`} type="text" name="address" />
            <ErrorMessage className='text-danger' name='address' component='div' />
            <br />

            <label>Gender :</label>&nbsp;&nbsp;&nbsp;
            <label>Male</label>&nbsp;
            <Field type="radio"  name="gender" value="male" />
            &nbsp;&nbsp;&nbsp;
            <label>Female</label>&nbsp;
            <Field type="radio"  name="gender" value="female" />
            <ErrorMessage className="text-danger" name="gender" component="div" />
            <br />
            <br />

            <label>Date Of Birth  : </label>&nbsp;&nbsp;
            <Field type="date" name="date" className="form-control"/>
            <ErrorMessage className='text-danger' name='date' component='div' />
            <br />

            <label>Email :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control  ${touched.email && errors.email ? 'error' : ''}`} type="email"  name="email" />
            
            <ErrorMessage className='text-danger' name='email' component='div' />
            <br />


            <label>Phone Number :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.phone && errors.phone ? 'error' : ''}`} type="number" name="phone" />
            <ErrorMessage className='text-danger' name='phone' component='div' />
            <br />

            <label>If Yes, State on Which condition and When ? :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.cover && errors.cover ? 'error' : ''}`} as="textarea" name="cover" />
            <ErrorMessage className='text-danger' name='cover' component='div' />
            <br /><br />

            <label>City : </label>&nbsp;
            <Field name="city" as="select" className="form-control">
              <option>select</option>
              <option value="suret">Canada</option>
              <option value="dehli">Usa</option>
              <option value="mumbai">India</option>
            </Field>
            <ErrorMessage
              className="text-danger"
              name="country"
              component="div"
            />
            <br />
            <br />
              <h2>Appoinment Type </h2>
            <label>Select Which appoinment type yuo require : </label>&nbsp;&nbsp;&nbsp;<br /><br />
            <label>Cervix checkup </label>&nbsp;&nbsp;
            <Field type="checkbox" name="check" value="Cervix checkup" /><br /><br />
            
            <label>Heart checkup</label>&nbsp;&nbsp;
            <Field type="checkbox" name="check" value="Heart checkup" /><br /><br />
        
            <label>Eye checkup</label>&nbsp;&nbsp;
            <Field type="checkbox" name="check" value="Eye checkup" />
            <ErrorMessage className="text-danger" name="check" component="div" />
            <br />
            <br />
           

           

            <button type="submit" className="btn btn-primary">SEND</button>

          </Form>
        )}
      </Formik>




    </div>
  )
}

export default About
