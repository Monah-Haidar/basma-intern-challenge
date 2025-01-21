import { XMarkIcon } from "@heroicons/react/24/outline";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";


export default function LoginModal({ setIsModalOpen, setIsRegister }) {
  const { token, setToken } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const initialValues = {
    email: "",
    password: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await fetch("api/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401 || response.status === 404) {
            setErrorMessage("Invalid email or password");
          }
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Response:", data);

        if (data.token) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        resetForm();
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md w-96 z-50">
        <div className="flex justify-between items-center mb-4">
          <XMarkIcon
            onClick={() => setIsModalOpen(false)}
            className="h-6 w-6 text-gray-500 cursor-pointer"
          />
          <h2 className="text-lg font-semibold mb-2">تسجيل الدخول</h2>
        </div>
        

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              {errorMessage && (
                <div className="rounded-md   bg-red-100 p-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

          
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

           
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {isSubmitting ? "Logging in..." : "Log In"}
              </button>
            </Form>
          )}
        </Formik>


        <div className="text-sm text-center mt-4">
        <span>Don't have an account? </span>
        <button
          onClick={() => setIsRegister(true)} 
          className="text-green-500"
        >
          Register
        </button>
      </div>
      </div>
    </>
  );
}
