import React from 'react'
import Button from "@mui/material/Button";
import { Icon } from '@mui/material';
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";


const CreateAcntBtn = () => {
  return (
    <Button
      variant="bold"
      size="medium"
      startIcon={<Icon><PersonAddAlt1Icon sx={{width:'20px'}} /></Icon>}
      sx={{ fontWeight: "bold", border: `4px solid black`, color: "#228b22" }}
    >
      Create Account
    </Button>
  );
}

export default CreateAcntBtn