import { Container } from '@mui/system';
// import CreateAcntBtn from '../component/CreateAcntBtn';
import LoginForm from '../component/LoginForm'
import { Typography } from '@mui/material'

const LoginPage = ({ createAcntBtnTxt }) => {
// const {user, setUser} = useContext(AppContext);


  return (
      <Container
          id='loginCon'
          component="div" align="center" style={{  marginTop: '5rem' }}>
      <Typography
        align="center"
        variant="h3"
        component="h1"
        style={{ margin: "auto", display: "inline" }}
      >
        Login
      </Typography>

      <LoginForm createAcntBtnTxt={createAcntBtnTxt}/>
    </Container>
  );
}

export default LoginPage