"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import s from "./style.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    enquiry: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    enquiry: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <div className={s.componentContent}>
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validate={validateForm}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={s.formContent}>
            <div>
              <div className="flex">
                <label htmlFor="name" className={s.label}>
                  Name
                </label>
                <Field name="name" type="text" className={s.input} />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="lastName" className={s.label}>
                  Last name
                </label>
                <Field name="lastName" type="text" className={s.input} />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="email" className={s.label}>
                  Email
                </label>
                <Field name="email" type="email" className={s.input} />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="phoneNumber" className={s.label}>
                  Phone number
                </label>
                <Field name="phoneNumber" type="text" className={s.input} />
              </div>
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="enquiry" className={s.label}>
                  Enquiry
                </label>
                <textarea
                  type="text"
                  name="enquiry"
                  rows={6}
                  className={`${s.input} h-auto w-full border border-black my-1 rounded-md`}
                />
              </div>
              <ErrorMessage
                name="enquiry"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <button type="button-styles">Submit</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
