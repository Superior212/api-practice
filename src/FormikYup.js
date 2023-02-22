import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYup = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8).required('required')
    })
   const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
           console.log(values);
        }
    })
  return (
    <>
    <div className='flex justify-center items-center'>
        <div className='shadow p-3 rounded max-w-md'> 
        <h3 className='text-slate-700 text-2zl font-bold mb-2'>Sign Up</h3>
        <input type="text" onChange={formik.handleChange} value={formik.firstName}  placeholder='FirstName' className='rounded border focus:border-sky-700 w-full p-2 text-sm transition my-2 outline-none' name="firstName" />
        <input type="text" onChange={formik.handleChange} value={formik.lastName} placeholder='Lastname' className='rounded border focus:border-sky-700 w-full p-2 text-sm transition my-2 outline-none' name="lastName"  />
        <input type="text" onChange={formik.handleChange} value={formik.email} placeholder='Email' className='rounded border focus:border-sky-700 w-full p-2 text-sm transition my-2 outline-none' name="email"  />
        <input type="text" onChange={formik.handleChange} value={formik.password} placeholder='Password' className='rounded border focus:border-sky-700 w-full p-2 text-sm transition my-2 outline-none' name="password"  />
        {formik.errors.password ? <div className='text-red-500 text-sm'>{formik.errors.password}</div> : null}
        <button onClick={formik.handleSubmit} className="rounded bg-sky-900 focus:ring outline-none hover:bg-sky-700 w-full p-2 text-sm my-2 text-white transition" type='button'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default FormikYup