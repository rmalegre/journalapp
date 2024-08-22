import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "calc(100vh - 100px)",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 2,
      }}
    > 
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: "white" }}>
          Seleccione una entrada
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};
