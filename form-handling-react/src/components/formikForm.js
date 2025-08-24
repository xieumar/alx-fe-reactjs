import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormicForm = () => {
  
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm(); 
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3 max-w-sm mx-auto p-4 border rounded shadow-md">
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" className="border p-2 w-full" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="border p-2 w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="border p-2 w-full" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormicForm;
