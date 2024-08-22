import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme/theme";
import { CssBaseline } from "@mui/material";

export const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <CssBaseline />
      <Routes>
        {/* Login y registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </ThemeProvider>
  );
};
