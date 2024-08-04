import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';


const RegistrationForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        familyDoctor: '',
        healthConditions: '',
        guardianName: '',
        phoneNumber: '',
        email: ''
        /*"I consent to photos of my child being used on social media for promotional purposes"*/
    }

    validationSchema: Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
    })

    const handleSubmit = (values) => {
        // Perform form validation and submission logic here
        // You can access the form data using values.firstName, values.lastName, etc.
        console.log(values)
    }

    return (
        // <form onSubmit={formik.handleSubmit}>
        //     <label htmlFor="firstName">First Name</label>
        //     <input
        //         id="firstName"
        //         name="firstName"
        //         type="text"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.firstName}
        //     />
        //     {formik.touched.firstName && formik.errors.firstName ? (
        //         <div>{formik.errors.firstName}</div>
        //     ) : null}
        // </form>

        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateForm}
            validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};
/*
// Render the registration form component
ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
        const lastNameInput = document.createElement('input');
        const emailInput = document.createElement('input');
        const passwordInput = document.createElement('input');
        const submitButton = document.createElement('button');

        // Set attributes and properties for the form elements
        firstNameInput.setAttribute('type', 'text');
        firstNameInput.setAttribute('placeholder', 'First Name');
        firstNameInput.addEventListener('input', (event) => {
            this.firstName = event.target.value;
        });

        lastNameInput.setAttribute('type', 'text');
        lastNameInput.setAttribute('placeholder', 'Last Name');
        lastNameInput.addEventListener('input', (event) => {
            this.lastName = event.target.value;
        });

        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('placeholder', 'Email');
        emailInput.addEventListener('input', (event) => {
            this.email = event.target.value;
        });

        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', 'Password');
        passwordInput.addEventListener('input', (event) => {
            this.password = event.target.value;
        });

        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Register';
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });

        // Append the form elements to the form
        form.appendChild(firstNameInput);
        form.appendChild(lastNameInput);
        form.appendChild(emailInput);
        form.appendChild(passwordInput);
        form.appendChild(submitButton);

        // Append the form to the document body or a container element
        document.body.appendChild(form);


// Create an instance of the registration form and render it
const registrationForm = new RegistrationForm();
registrationForm.render();*/


export default RegistrationForm
