import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name : yup.string().min(5, "Name must have minimum 5 letters").required("Name is required"),
  email : yup.string().email("Invalid email").required(),
  password : yup.string().required()
})


function App() {
  const [success, setSuccess] = useState("");
  const [message, setMessage] = useState("")


  function onSubmit(values){     
    console.log(values);
    setSuccess("Thank you !!!")
    formik.resetForm("")
  }

  const formik = useFormik({
    initialValues : {
      name:"",
      email:"",
      password: ""
    },
    validateOnBlur:false,
    validationSchema,
    onSubmit
  })
  console.log("succ",success);
  console.log("mesg", message)
  console.log(formik.errors)
  return (
    <>
      <div className="form-box mt-3">
        <h2 className="form-heading">Registration Form</h2>
        {success}
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="">Name</label>
              <input 
              type="text"
              name="name" 
              value={formik.values.name}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              className="form-control" />
              {formik.touched.name && formik.errors.name ? <p className="err-text">{formik.errors.name}</p> : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="">Email</label>
              <input 
              type="email" 
              name="email" 
              value={formik.values.email}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              className="form-control" />
              {formik.touched.email && formik.errors.email ? <p className="err-text">{formik.errors.email}</p> : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="">Password</label>
              <input 
              type="password" 
              name="password" 
              value={formik.values.password}
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              className="form-control" />
               {formik.touched.password && formik.errors.password ? <p className="err-text">{formik.errors.password}</p> : null}
            </div>


            <div className="form-group mb-3 text-center">
              <button type="submit" className="btn btn-info" disabled={!formik.isValid}>Submit</button>
            </div>
        </form>
      </div>
    </>
  );
}

export default App;
