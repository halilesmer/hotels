import { Alert, Stack } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'

const AuthErrorAlert = ({ alertTxt, handleclose }) => {
  return (
    <Box>
      <Stack sx={{ width: "100%", marginTop: "1rem" }} spacing={2}>
        <Alert
          variant="outlined"
          severity="error"
        //   handleClose={handleclose}
          onClose={handleclose}
        >
          {alertTxt}
        </Alert>
      </Stack>
    </Box>
  );
};

export default AuthErrorAlert