import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link, Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingCredentials } from '../slices';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../thunks';
import { useMemo } from 'react';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage} = useSelector( state => state.auth)

  const { email, password, onInputChange }= useForm ({
    email: '',
    password: '',
  })
  const isAuthenticating = useMemo(() => status === "checking", [status])

  const onSubmit = ( event )  => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onSignWithGoogle = () => {
    console.log('Google');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField
                sx={{ mt: 2 }}
                label="Email"
                type="email"
                name="email"
                autoComplete="off"
                value={email} 
                onChange={onInputChange}
                placeholder="correo@yahoo.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2, mt:1 }}>
              <TextField
                sx={{ mt: 2 }}
                label="Contraseña"
                type="password"
                name="password"
                value={password}
                placeholder="Contraseña"
                onChange={onInputChange}
                fullWidth
              />
            </Grid>
            <Grid container
               display={errorMessage ? "" :
              "none"}
            sx={{mt:1}}
          >
            <Grid item xs={12}
             >
              <Alert  variant="filled" severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
              <Grid item xs={12} sm={6}>
              <Button 
              disabled={isAuthenticating}
              onClick={onSignWithGoogle}
              variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
            {/* Enlace para redireccionar a la pagina de registro */}
            <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
            <Button>
              <Link component={RouterLink} to="/auth/register">
                Registrate
              </Link>{" "}
            </Button>
          </Grid>
          </Grid>
        </form>
    </AuthLayout>
   

  
  );
};
