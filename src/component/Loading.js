import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import React from 'react'

const Loading = () => {
  return (
    <Box
      className="circularProgress"
      style={{ height: "80%",width: '100%', textAlign: "center", lineHeight: "20" }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default Loading