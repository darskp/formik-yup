import * as yup from "yup";
const Signupschema = yup.object(
    {
        name: yup.string().min(2).max(25).required('Please enter your name'),
        mail: yup.string().email().required('Enter your email'),
        Password: yup.string().min(6).required('Enter the password'),
        Confirm_Password: yup.string().min(6).required().oneOf([yup.ref('Password'), null], "Password must match")
    });
export default Signupschema;