"use client";
import { FC, useState } from "react";
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "@/theme";
import { useAppSelector } from "@/redux/hook";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useGetUserQuery } from "@/redux/services/apiSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mode: Mode = useAppSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const userId = useAppSelector((state) => state.user.userId);
  console.log(userId);

  const { data } = useGetUserQuery(userId);

  return (
    <ThemeProvider theme={theme}>
      <Box
        display={isNonMobile ? "flex" : "block"}
        sx={{ bgcolor: "background.default" }}
        width="100vw"
        height="100vh"
      >
        <Sidebar
          user={data}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar user={data} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
