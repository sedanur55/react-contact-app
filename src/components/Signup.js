import React from 'react'
import {useState,useEffect} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import validations from './validations';
import './Contacts/styles.css';

function Signup() {
    const {handleSubmit, handleChange,handleBlur, values, errors,touched} = useFormik({
        initialValues: {
              email: '',
              password: '',
              passwordConfirm: '',
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations,
      });
    
      return (
        <div className='container'><div className='imgcontainer'><img className='img-with-shadow' src="/logo-2x.png" alt="Logo" /></div>
        <div id="signupcontainer" className=''>
          <form onSubmit={handleSubmit}>
            <div>
              <input className='signupinput'
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} // value prop'unu ekleyin
              />
              {
	errors.email && touched.email &&(<div className='error'><span class="error-icon"></span>{errors.email}</div>)
}
            </div>
            <div>
              <input className='signupinput'
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password} // value prop'unu ekleyin
              />
              {
	errors.password && touched.password &&(<div className='error'><span class="error-icon"></span>{errors.password}</div>)
}
            </div>
            <div>
              <input className='signupinput'
                name="passwordConfirm"
                placeholder="Password Confirm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm} // value prop'unu ekleyin
              />{
                errors.passwordConfirm && touched.passwordConfirm &&(<div className='error'><span class="error-icon"></span>{errors.passwordConfirm}</div>)
            }
            </div>
            <div>
            <button type="submit">Add</button>
          </div>
            
          </form>
          {/* <code>{JSON.stringify(values)}</code> */}
        </div></div>
      );
    }

export default Signup;
