import {object, string} from "yup";
import * as Yup from "yup";
import YupPassword from 'yup-password';
YupPassword(Yup);

export const initialValues = {
    name: '',
    username: '',
    mobileNumber:'',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    DOB: '',
};

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const formSchema = object({

        name: string("Enter name")
        .required("name is required")
        .min(2, 'Must have at least 2 characters'),
        username: string("Enter username")
        .required("Username is required")
        .min(2, 'Must have at least 2 characters'),
        mobileNumber:string()
        .required("Mobile number is required")
        .matches(phoneRegExp, 'Phone number is not valid'),
        email: string("Enter email")
        .email("Invalid Email format")
        .required("email is required"),
        password: string("Enter password")
        .minLowercase(1, 'password must contain at least one lower case letter')
        .minUppercase(1, 'password must contain at least one upper case letter')
        .minNumbers(1, 'password must contain at least one number')
        .minSymbols(1, 'password must contain at least one special character')
        .min(8,"Minimum Eight characters are required")
        .max(64,"Maximum SixtyFour characters are required")
        .required("Password is required"),
        confirmPassword: string("Confirm password")
        .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
        .required("Password is required"),
        city: string("Enter city")
        .required("City is required"),
        DOB : string("Enter DOB ddmmyyy")
        .required("Date of Birth is required")
});



