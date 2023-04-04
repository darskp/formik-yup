import { Formik, Form, Field, ErrorMessage } from 'formik';
import *as yup from 'yup';
const SignUpForm = () => {
    let initialValues = {
        name: "", email: "", password: "", confirm_password: ""
    }
    let validate = yup.object().shape(
        {
            name: yup.string().min(2, 'is too short!').max(25, 'too long').required('Enter the Name'),
            email: yup.string().email('Invalid email').required('Enter the Name'),
            password: yup.string().min(8, 'Password must be 8 characters').required('Enter the password')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])(?=.{8,})/,
                    'Must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                ),
            confirm_password: yup.string().
            oneOf([yup.ref('password'), null], "Password must match")
        })

    let handleSubmit = (values) => {
        // e.preventDefault();
        console.log(values)
    }
    return (
        <div>
            <h1 className='text-center'>Sign Up</h1>
            <Formik initialValues={initialValues} validationSchema={validate} onSubmit={handleSubmit}>
                {({errors, touched }) => (
                        <Form>
                            <div>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" />
                                { errors.name && touched.name ?
                                <p>
                                    <ErrorMessage name="name" />

                                </p>:null
                                }
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" />
                            </div>
                            <div>
                                <label htmlFor="confirm_password">confirm_password</label>
                                <Field type="password" name="confirm_password" />
                                <ErrorMessage name="confirm_password" />
                            </div>
                            <button type="submit">Sign Up</button>
                        </Form>)
                }
            </Formik>
        </div>
    );
}

export default SignUpForm;