import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationCon({ data, handlePage, pageNum }) {
  return (
    <Stack spacing={2} mb={2} mt={2}>
      <Pagination
        size="small"
        count={data?.length < 20 ? pageNum : 100}
        showFirstButton
        showLastButton
        sx={{ margin: "auto" }}
        onChange={(e, page) => handlePage(page)}
      />
    </Stack>
  );
}
