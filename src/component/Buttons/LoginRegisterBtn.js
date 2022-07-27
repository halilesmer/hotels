import Button from "@mui/material/Button";
import { Icon } from '@mui/material';
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import React from 'react'

const LoginRegisterBtn = ({createAcntBtnTxt, color='green'}) => {

  return (
    <Button
      variant="bold"
      size="medium"
      startIcon={<Icon><PersonAddAlt1Icon sx={{width:'20px'}} /></Icon>}
      sx={{ fontWeight: "bold", border: `4px solid black`, color: {color},}}
    >
      {createAcntBtnTxt}
    </Button>
  );
}

export default LoginRegisterBtn