"use client";
import { FC } from "react";
import { Typography, Box, useTheme } from "@mui/material";
interface HeaderProps {
  title: String;
  subTitle: String;
}

const Header: FC<HeaderProps> = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        color={theme.palette.secondary[300]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
