import { useDispatch } from 'react-redux'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { startCreatingUserWithEmailPassword } from '../thunks'

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe contener un @"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};


export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const {status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

 
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
   } = useForm(formData, formValidations);


 const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }
 
  return (
    <AuthLayout title="Crear cuenta">
       <form onSubmit={onSubmit}>
        <Grid container>
          
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              name="displayName"
               autoComplete="off"
              placeholder="Nombre Completo"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />{" "}
          </Grid>
          
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField

              label="Correo "
              type="email"
              name="email"
         
              placeholder="Correo Electrónico"
              autoComplete="off"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
             
  
              fullWidth
            />{" "}
          </Grid>
          <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="contraseña"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />{" "}
          </Grid>
    
          
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              {/* Boton para crear cuenta */}
              <Grid item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
              disabled={isCheckingAuthentication} type="submit" color="primary"
              variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>{" "}
            {/* Enlace para redireccionar a la pagina de registro */}
          </Grid>
        </Grid>
      </form>
    
    </AuthLayout>
  )
  
}
