import { FC } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "@/components/Header";
import { useGetProductsQuery, useGetUserQuery } from "@/redux/services/apiSlice";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { data, isLoading } = useGetProductsQuery();
  console.log("data", data);

  return (
    <Box>
      <Header title={"PRODUCTS"} subTitle={"See your list of products"} />
    </Box>
  );
};

export default Page;
