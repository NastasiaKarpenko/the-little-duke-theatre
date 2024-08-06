"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import s from "./style.module.css";

const Page = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    // address: "",
    // familyDoctor: "",
    // healthConditions: "",
    guardianName: "",
    lesson: "placeholder",
    email: "",
    phoneNumber: "",
    /*"I consent to photos of my child being used on social media for promotional purposes"*/
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    lesson: Yup.string().test(
      "lesson check",
      "Please select the lesson",
      (value) => value !== "placeholder"
    ),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    // address: Yup.string().required("Required"),
    // familyDoctor: Yup.string().required("Required"),
    // healthConditions: Yup.string().required("Required"),
    guardianName: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <div className={s.componentContent}>
      <h1 className="text-3xl font-bold mb-6 text-center"> Register new kid </h1>
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
                <label htmlFor="firstName" className={s.label}>
                  First Name
                </label>
                <Field type="text" name="firstName" className={s.input} />
              </div>

              <ErrorMessage
                name="firstName"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="lastName" className={s.label}>
                  Last Name
                </label>
                <Field type="text" name="lastName" className={s.input} />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="lesson" className={s.label}>
                  Lesson
                </label>
                <Field as="select" name="lesson" className={s.input}>
                  <option value="placeholder" className="text-slate-400">
                    please select a lesson
                  </option>
                  <option value="Tiny Tots (4 to 6yrs)">Tiny Tots (4 to 6yrs)</option>
                  <option value="Drama (6 to 8yrs)">Drama (6 to 8yrs)</option>
                  <option value="Dance & Drama & Singing (6 to 8yrs)">Dance & Drama & Singing (6 to 8yrs)</option>
                  <option value="Drama (9 to 12yrs)">Drama (9 to 12yrs)</option>
                  <option value="Drama & Dance & Singing (9 to 12 yrs)">Drama & Dance & Singing (9 to 12 yrs)</option>
                  <option value="Singing (teenagers)">Singing (teenagers)</option>
                  <option value="Dance (teenagers)">Dance (teenagers)</option>
                  <option value="Drama (13 to 15yrs)">Drama (13 to 15yrs)</option>
                  <option value="Drama (16 to 17 yrs)">Drama (16 to 17 yrs)</option>
                  <option value="Drama (17 to 18yrs)">Drama (17 to 18yrs)</option>
                </Field>
              </div>
              <ErrorMessage
                name="lesson"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="email" className={s.label}>
                  Email
                </label>
                <Field type="email" name="email" className={s.input} />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={s.InputErrors}
              />
            </div>

            <div>
              <div className="flex">
                <label htmlFor="phoneNumber">Phone number</label>
                <Field type="tel" name="phoneNumber" className={s.input} />
              </div>
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className={s.InputErrors}
              />
            </div>
            <div>
              <div className="flex">
                <label htmlFor="guardianName">Guardian Name</label>
                <Field type="text" name="guardianName" className={s.input} />
              </div>
              <ErrorMessage
                name="guardianName"
                component="div"
                className={s.InputErrors}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`${s.registerBtn} bg-gradient-to-r from-blue-400 to-sky-500  hover:from-pink-500 hover:to-sky-500 `}
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Page;
