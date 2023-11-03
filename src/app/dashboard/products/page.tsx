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
import { useGetProductsQuery, useGetUserQuery } from "@/redux/services/apiSlice";
import Product from "@/components/Product";
import ProductCard from "@/components/Product";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { data: products, isLoading, error } = useGetProductsQuery({});
  console.log(typeof products);

  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"PRODUCTS"} subTitle={"See your list of products"} />
      {products || !isLoading ? (
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
            ({ _id, name, description, price, rating, category, supply, stat }: Product) => (
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
            )
          )}
          s
        </Box>
      ) : null}
    </Box>
  );
};

export default Page;
