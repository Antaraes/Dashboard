"use client";
import { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "@/redux/services/apiSlice";
import Header from "@/components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery({});
  console.log(data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box>
      <Header title={"CUSTOMERS"} subTitle={"List of Customers"} />
      <Box
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderColor: "white",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[500],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.alt,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[500],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[100]} !important`,
          },
        }}
      >
        <DataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          autoPageSize
          initialState={{
            ...data,
            sorting: {
              ...data,
              sortModel: columns,
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Page;
