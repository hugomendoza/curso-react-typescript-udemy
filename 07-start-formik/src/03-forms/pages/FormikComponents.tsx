import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ Yup.object({
          firstName: Yup.string()
            .max(15, "Too Long!")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Too Long!")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Required"),
          terms: Yup.boolean()
            .oneOf([true], "You must accept the terms"),
          jobType: Yup.string()
            .required("Required")
            .notOneOf(["design"], "Invalid job type")
        })}
      >
        {(formik) => (
            <Form>
              
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
              />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
              />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="text"
              />
              <ErrorMessage name="email" component="span" />

              <label htmlFor="jobs">Jop Type</label>
              <Field
                id="jobs"
                name="jobType"
                as="select"
              >
                <option value="">Pick soomething</option>
                <option value="devfront">Front</option>
                <option value="devBack">Back</option>
                <option value="devOps">dev Ops</option>
                <option value="design">Design</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <label htmlFor="terms">
                <Field
                  id="terms"
                  name="terms"
                  type="checkbox"
                />
                Terms and conditions
              </label>
              <ErrorMessage name="terms" component="span" />

              <button
                type="submit"
              >
                Submit
              </button>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
