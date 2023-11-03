"use client";
import { FC, useState } from "react";
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "@/theme";
import ReduxProvider from "@/redux/provider";
import { useAppSelector } from "@/redux/hook";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useGetProductsQuery, useGetUserQuery } from "@/redux/services/apiSlice";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const mode: Mode = useAppSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const userId = useAppSelector((state) => state.user.userId);
  console.log(userId);

  const { data } = useGetUserQuery(userId);

  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <Box
          display={isNonMobile ? "flex" : "block"}
          sx={{ bgcolor: "background.default" }}
          width="100vw"
          height="full"
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
            <div className="p-10">{children}</div>
          </Box>
        </Box>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default DashboardLayout;
