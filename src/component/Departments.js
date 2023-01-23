import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import '../App.css';
import * as yup from 'yup';
import "yup-phone";


const Departments = () => {

  const validations = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
    pass: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Enter strong password"
      )
      .required(),
    phone: yup.string().phone().required(),
    cover: yup.string().max(500).required(),
    data: yup.date().required(),
    cv:yup.mixed().required(),
    

  })

  return (
    <div className="d-flex justify-content-center">

      <Formik
        validationSchema={validations}
        initialValues={{ name: "", address: "", email: "", pass: "", phone: "", cover: "", data: "", cv: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            
            <h1 className="text-primary text-center mb-4 mt-3">Job Application</h1>
            <label>Full Name : </label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.name && errors.name ? 'error' : ''}`} type="text" name="name" />
            <ErrorMessage className='text-danger' name='name' component='div' />
            <br />

            <label>Current Address :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.address && errors.address ? 'error' : ''}`} type="text" name="address" />
            <ErrorMessage className='text-danger' name='address' component='div' />
            <br />

            <label>Email :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control  ${touched.email && errors.email ? 'error' : ''}`} type="email"  name="email" />
            
            <ErrorMessage className='text-danger' name='email' component='div' />
            <br />

            <label>Password :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.pass && errors.pass ? 'error' : ''}`} type="password" name="pass" />
            <ErrorMessage className='text-danger' name='pass' component='div' />
            <br />

            <label>Phone Number :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.phone && errors.phone ? 'error' : ''}`} type="number" name="phone" />
            <ErrorMessage className='text-danger' name='phone' component='div' />
            <br />

            <label>Cover Letter :</label>&nbsp;&nbsp;
            <Field className={`login-input form-control ${touched.cover && errors.cover ? 'error' : ''}`} as="textarea" name="cover" />
            <ErrorMessage className='text-danger' name='cover' component='div' />
            <br /><br />


            <label>Earliest Possible Start Date :</label>&nbsp;&nbsp;
            <Field type="date" name="date" className="form-control"/>
            <ErrorMessage className='text-danger' name='date' component='div' />
            <br /><br />

            <label>Upload Resume :</label>&nbsp;&nbsp;
            <Field type="file" className="form-control" name="cv" />
            <ErrorMessage className='text-danger' name='cv' component='div' />
            <br /><br />

            <button type="submit" className="btn btn-primary ">Apply</button>

          </Form>
        )}
      </Formik>




    </div>
  )
}

export default Departments
{/* <section id="departments" className="departments">
  <div className="container">
    <div className="section-title">
      <h2>Departments</h2>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <ul className="nav nav-tabs flex-column">
          <li className="nav-item">
            <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">E.N.T</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Cancer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Physiotherapy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Dental</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Neurosurgery</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>E.N.T</h3>
                <p className="fst-italic">Vestibulum volutpat luctus quam sed finibus. Sed luctus odio eget ex posuere
                  hendrerit. Donec iaculis nisi ut purus dapibus</p>
                <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                  tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                  tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="../assets/img/departments-1.jpg" alt className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Cancer</h3>
                <p className="fst-italic">Quisque sapien ipsum, efficitur ac dui et, fringilla viverra tellus. Proin urna
                  augue, posuere ut pellentesque quis, cursus ac neque.</p>
                <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                  tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                  tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="../assets/img/departments-2.jpg" alt className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Physiotherapy</h3>
                <p className="fst-italic">Fusce placerat ornare enim sed varius. Mauris tortor diam, molestie eget
                  vulputate a, facilisis quis nibh. Donec blandit efficitur nulla</p>
                <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                  tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                  tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="../assets/img/departments-3.jpg" alt className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Dental</h3>
                <p className="fst-italic"> sollicitudin sed est. Vestibulum volutpat luctus quam sed finibus. Sed luctus
                  odio eget ex posuere hendrerit. Donec iaculis nisi ut purus.</p>
                <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                  tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                  tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="../assets/img/departments-4.jpg" alt className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-5">
            <div className="row">
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>Neurosurgery</h3>
                <p className="fst-italic">Aliquam sed convallis libero. Proin in mi tempor, convallis lectus sed,
                  convallis mauris. Quisque ac nulla et lorem ultricies vulputate.</p>
                <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                  tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                  tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src="../assets/img/departments-5.jpg" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
