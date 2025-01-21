import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function RegisterModal({ setIsModalOpen, setIsRegister }) {
 

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match") 
      .required("Confirm password is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    await fetch("api/register", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
       
      .then(() => window.location.reload())
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
          <h2 className="text-lg font-semibold mb-2">Sign up</h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
             
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              
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

              
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>




              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-sm text-center  mt-4">
          <span>Already have an account? </span>
          <button
            onClick={() => setIsRegister(false)} 
            className="text-green-500"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
