import { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom"
import { routes } from "./routes"

import {
  FormikAbstraction,
  FormikAbstractionZod,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DynamicForm
} from '../03-forms/pages';

import logo from "../logo.svg"

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              <li>
                <NavLink to="/register">Register Page</NavLink>
              </li>
              <li>
                <NavLink to="/formik-basic">Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to="/formik-yup">Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formik-components">Formik Components</NavLink>
              </li>
              <li>
                <NavLink to="/formik-abstraction">Formik Abstraction</NavLink>
              </li>
              <li>
                <NavLink to="/formik-abstraction-zod">Formik Abstraction Zod</NavLink>
              </li>
              <li>
                <NavLink to="/formik-register">Formik Register</NavLink>
              </li>
              <li>
                <NavLink to="/dynamic-form">Dynamic Form</NavLink>
              </li>
              {routes.map(({to, name}) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            
            <Route
              path="/register"
              element={<RegisterPage />}
            />

            <Route
              path="/formik-basic"
              element={<FormikBasicPage />}
            />

            <Route
              path="/formik-yup"
              element={<FormikYupPage />}
            />

            <Route
              path="/formik-components"
              element={<FormikComponents />}
            />

            <Route
              path="/formik-abstraction"
              element={<FormikAbstraction />}
            />

            <Route
              path="/formik-abstraction-zod"
              element={<FormikAbstractionZod />}
            />

            <Route
              path="/formik-register"
              element={<RegisterFormikPage />}
            />

            <Route
              path="/dynamic-form"
              element={<DynamicForm />}
            />

            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}

            <Route
              path="/*"
              element={<Navigate to={ routes[0].to }
              replace
            />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}