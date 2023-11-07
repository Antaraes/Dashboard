"use client";
import { FC, useState } from "react";
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
import Skeleton from "@mui/material/Skeleton";
import { useGetProductsQuery, useGetUserQuery } from "@/redux/services/apiSlice";
import Product from "@/components/Product";
import ProductCard from "@/components/Product";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { data: products, isLoading, error } = useGetProductsQuery({});
  console.log(typeof products);
  const bool = true;

  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box m={"1.5rem 2.5rem"} height={isLoading ? "100vh" : "100%"}>
      <Header title={"PRODUCTS"} subTitle={"See your list of products"} />
      {products ? (
        <Box
          mt="20px"
          display={"grid "}
          gridTemplateColumns={"repeat(4,minmax(0,1fr))"}
          justifyContent={"space-between"}
          rowGap={"20px"}
          columnGap={"1%"}
          overflow={"hidden"}
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4 " },
          }}
        >
          {products.map(
            ({ _id, name, description, price, rating, category, supply, stat }: Product) => {
              if (!isLoading) {
                return (
                  <ProductCard
                    key={_id}
                    _id={_id}
                    name={name}
                    description={description}
                    price={price}
                    rating={rating}
                    category={category}
                    supply={supply}
                    stat={stat}
                  />
                );
              }

              return <Skeleton key={_id} variant="rectangular" width={210} height={118} />;
            }
          )}
        </Box>
      ) : null}
    </Box>
  );
};

export default Page;
