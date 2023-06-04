import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  
  
  return (
    <div>

      <h1>Register Formik Page</h1>
      
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .min(2, "El nombre debe tener al menos 3 caracteres")
              .max(15, "El nombre debe tener máximo 15 caracteres")
              .required("El nombre es requerido"),
            email: Yup.string()
              .email("El email no es correcto")
              .required("El email es requerido"),
            password1: Yup.string()
              .min(6, "La contraseña debe tener al menos 6 caracteres")
              .required("La contraseña es requerida"),
            password2: Yup.string()
              .oneOf([Yup.ref("password1") ], "Las contraseñas no coinciden")
              .required("La contraseña es requerida")
          })
        }
      >
        {({handleReset}) => (
          <Form>

            <MyTextInput
              label="Nombre"
              name="name"
              placeholder="Nombre"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />

            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="********"
            />

            <MyTextInput
              label="Confirm Password"
              name="password2"
              type="password"
              placeholder="********"
            />

            <button
              type="submit"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>

          </Form>
        )}

      </Formik>
    </div>
  )
}
