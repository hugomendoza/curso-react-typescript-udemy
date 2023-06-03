import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {

  const {
    formData,
    handleChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: ""
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log( formData );
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form
        noValidate
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder='name'
          value={name}
          name="name"
          onChange={handleChange}
          className={ `${name.trim().length <= 0 && "has-error"}` }
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input
          type="email"
          placeholder='mail'
          value={email}
          name="email"
          onChange={handleChange}
          className={`${ !isValidEmail(email) && "has-error" }`}
        />
        { !isValidEmail(email) && <span>Email no es válido</span> }
        
        <input
          type="password"
          placeholder='password1'
          value={password1}
          name="password1"
          onChange={handleChange}
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span> }
        
        <input
          type="password"
          placeholder='repeat password'
          value={password2}
          name="password2"
          onChange={handleChange}
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length > 0 && password1 !== password2 && <span>La contraseñas no coinciden</span> }
        
        <button
          type="submit"
        >
          Create
        </button>
        <button
          type="button"
          onClick={resetForm}
        >
          Reset
        </button>
      </form>
    </div>
  )
}
