import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormicForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border rounded-lg p-2"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border rounded-lg p-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border rounded-lg p-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormicForm;
