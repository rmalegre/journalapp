import { useDispatch } from 'react-redux';
import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { startLogout } from '../../auth';

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };

  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {" "}
            JournalApp{" "}
          </Typography>
          <Tooltip title="Cerrar Sesión">
          <IconButton  onClick={onLogout} color="error">
            <LogoutOutlined />
          </IconButton>
          </Tooltip>  
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
