import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import Signupschema from '../schema';
import { useState } from 'react';

let initialValues = {
    name: "",
    mail: "",
    Password: "",
    Confirm_Password: ""
}
function Formvalidation() {
let [value,setValues]=useState('')
    let { values, errors, handleChange, touched, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema: Signupschema,
        onSubmit: (values,action) => {
            console.log(values);
            let {name,mail,Password,Confirm_Password}=values;
            let valu={name,mail,Password,Confirm_Password};
            setValues(valu);
            action.resetForm();
        }
        
    })



    return (

        <>
            <div className='w-75 mx-auto border border-primary rounded my-4 p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="Username" className="form-label">Username : </label>
                        <input type="text" onBlur={handleBlur} onChange={handleChange} values={values.name} autoComplete='off' className="form-control" name="name" id="Username" placeholder="Enter your name" />
                        {errors.name && touched.name ? (<span className='text-danger fs-7'>{errors.name}</span>): null}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="mail" className="form-label">Email :</label>
                        <input type="email" onBlur={handleBlur} onChange={handleChange} values={values.mail} autoComplete='off' className="form-control" name="mail" id="email" placeholder="Enter your email" />
                        {errors.mail && touched.mail ? (<span className='text-danger fs-7'>{errors.mail}</span>) : null}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" onBlur={handleBlur} onChange={handleChange} values={values.Password} autoComplete='off' className="form-control" name="Password" id="Password" placeholder="Enter your Password" />
                        {errors.Password && touched.Password ? (<span className='text-danger fs-7'>{errors.Password}</span>) : null}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Confirm Password" className="form-label">Confirm Password</label>
                        <input type="password" onBlur={handleBlur} onChange={handleChange} values={values.Confirm_Password} autoComplete='off' className="form-control" name="Confirm_Password" id="Confirm_Password" placeholder="Enter your Confirm Password" />
                        {errors.Confirm_Password && touched.Confirm_Password ? (<span className='text-danger fs-7'>{errors.Confirm_Password}</span>) : null}

                    </div>
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
               

            </div>
            <p>value: {value.mail}</p>
            <div className='w-75 mx-auto border border-primary rounded my-4 p-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            Username:
                        </Form.Label>
                        <Form.Control type="text" onBlur={handleBlur} onChange={handleChange} values={values.name} name="name" id="name" placeholder='Enter your name' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control type="email" onBlur={handleBlur} onChange={handleChange} values={values.mail} placeholder='Enter your mail id' name="mail" id="mail" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} onChange={handleChange} values={values.Password} placeholder='Enter your password' name="password" id="password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            Confirm Password
                        </Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} onChange={handleChange} values={values.Confirm_Password} placeholder='Enter your confirm password' name="confirm_password" id="confirm_password" />
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        </>


    );
}

export default Formvalidation;