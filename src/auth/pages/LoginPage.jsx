import { useDispatch } from 'react-redux';
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link, Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingCredentials } from '../slices';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange }= useForm ({
    email: '',
    password: '',
  })



  const onSubmit = ( event )  => {
    event.preventDefault();
    console.log({ email, password });
  }

  const onSignWithGoogle = () => {
    console.log('Google');
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
                value={email} 
                onChange={onInputChange}
                placeholder="correo@yahoo.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
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
            <Grid container spacing={2} sx={{mt:2}}>
              <Grid item xs={12} sm={6}>
                <Button onClick={() => dispatch( checkingCredentials() )} 
                type="submit" variant="contained"  
                 color="primary" fullWidth >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button 
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
