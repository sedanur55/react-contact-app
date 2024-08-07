import React from 'react'
import {useState,useEffect} from 'react';
import { useFormik } from 'formik';

function Form({ addContact, contacts }) {
    const formik = useFormik({
      initialValues: {
        username: '',
        email: '',
        gender: 'female',
        hobies: [],
        country:"Turkey"
      },
      onSubmit: (values) => {
        // addContact([...contacts, values]);
        // formik.resetForm(); // resetForm'u doğrudan formik üzerinden çağırın
        console.log(values);
      },
    });
  
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="username"
              placeholder="User Name"
              onChange={formik.handleChange}
              value={formik.values.username} // value prop'unu ekleyin
            />
          </div>
          <div>
            <input
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email} // value prop'unu ekleyin
            />
          </div>
          <div>
          <span>Male</span>
            <input type="radio" name="gender" value="male" onChange={formik.handleChange} checked={formik.values.gender==="male"}/>
          <div>
          <span>Female</span>
            <input type="radio" name="gender" value="female" onChange={formik.handleChange} checked={formik.values.gender==="female"} />
          </div>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
          <div>
 Football
 <input type="checkbox" name='hobies' value="football" onChange={formik.handleChange} />
</div>

<div>
 Cinema
 <input type="checkbox" name='hobies' value="cinema" onChange={formik.handleChange} />
</div>

<div>
 Photography
 <input type="checkbox" name='hobies' value="photography" onChange={formik.handleChange} />
</div>
<div>
<select name="country" onChange={formik.handleChange} >
 <option value="tr">Turkiye</option>
  <option value="en">England</option>
 <option value="usa">USA</option>
</select>
</div>
        </form>
        <code>{JSON.stringify(formik.values)}</code>
      </div>
    );
  }
  
  export default Form;






// const initialForm = { username:"",email:""};
// function Form({addContact,contacts}) {
    
//     const [form,setForm] = useState(initialForm);
//     useEffect(()=>{
//         setForm(initialForm);
//     },[contacts])
//     const onChangeInput= (event)=>{
//         setForm({...form,[event.target.name]:event.target.value})
//     }
//     const onSubmit= (event)=>{
//         event.preventDefault();
//         if(form.username ==='' || form.email ==='') {
//             return false;
//         }
//         addContact([...contacts,form]);
//     }
//   return (
//     <div>
//         <Formik
//       initialValues={{
//         username: '',
//         email: '',
//       }}
      
//       onSubmit={(values, { resetForm }) => {
//         addContact([...contacts,values]);
//         resetForm();
//       }}
//     >
//        { ({handleSubmit,handleChange})=>(
//         <form onSubmit={handleSubmit}>
//         <div><input name='username' placeholder='User Name' value={values.username} onChange={handleChange}></input></div>
//         <div><input name='email' placeholder='Email' value={values.email}  onChange={handleChange}></input></div>
//         <div><button onClick={handleSubmit} >Add</button></div></form>

//         )}
//     </Formik>
        
//     </div>
//   )
// }

// export default Form;
