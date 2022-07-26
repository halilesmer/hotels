import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { AppContext } from "./context/appContext";

export default function PaginationCon({ data, }) {
  const app = useContext(AppContext);
  const { pageNumb, handlePage } = app;

  return (
    <Stack spacing={2} mb={2} mt={2}>
      <Pagination
        size="small"
        count={data?.length < 20 ? pageNumb : 100}
        showFirstButton
        showLastButton
        sx={{ margin: "auto" }}
        onChange={(e, pageNumb) => handlePage(pageNumb)}
        page={pageNumb}
      />
    </Stack>
  );
}
