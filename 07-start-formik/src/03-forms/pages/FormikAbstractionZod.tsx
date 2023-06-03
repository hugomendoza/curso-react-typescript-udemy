import { Formik, Form } from "formik";
// import * as Yup from "yup";
import { z } from "zod";

import "../styles/styles.css";
// import { MyTextInput } from "../components/MyTextInput";
// import { MySelect } from "../components/MySelect";
// import { MyCheckbox } from "../components/MyCheckbox";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstractionZod = () => {

  return (
    <div>
      <h1>Formik Abstraction Zod</h1>

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
        // validationSchema={ Yup.object({
        //   firstName: Yup.string()
        //     .max(15, "Too Long!")
        //     .required("Required"),
        //   lastName: Yup.string()
        //     .max(15, "Too Long!")
        //     .required("Required"),
        //   email: Yup.string()
        //     .email("Invalid email")
        //     .required("Required"),
        //   terms: Yup.boolean()
        //     .oneOf([true], "You must accept the terms"),
        //   jobType: Yup.string()
        //     .required("Required")
        //     .notOneOf(["design"], "Invalid job type")
        // })}

        validationSchema={ z.object({
          firstName: z.string().min(1).max(18),
        })}
      >
        {(formik) => (
            <Form>

              <MyTextInput
                label="First Name"
                name="firstName"
                id="firstName"
                placeholder="Hugo"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                id="lastName"
                placeholder="Smith"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                id="email"
                type="email"
                placeholder="DG8zG@example.com"
              />
              
              <MySelect
                name="jobType"
                label="Job Type"
                id="jobType"
              >
                <option value="">Pick soomething</option>
                <option value="devfront">Front</option>
                <option value="devBack">Back</option>
                <option value="devOps">dev Ops</option>
                <option value="design">Design</option>
              </MySelect>

              <MyCheckbox
                label="Terms and conditions"
                name="terms"
                id="terms"
              />

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
