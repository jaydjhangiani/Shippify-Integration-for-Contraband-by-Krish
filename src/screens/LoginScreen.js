import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { auth, provider } from "../utils/FirebaseSetup";
import { useAuthState } from "react-firebase-hooks/auth";
import img from "../assets/img/logo.png";

const LoginScreen = () => {
  const [user] = useAuthState(auth);
  const history = useNavigate();

  useEffect(() => {
    if (user) {
      history.push("/book-shipment");
    }
  }, [user, history]);

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <LoginContainer>
        <Logo src={img} />
        <Button variant="outlined" onClick={signIn}>
          Sign In With Google!
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default LoginScreen;

const breatheAnimation = keyframes`
   0% { background-position: left;}
   100% { background-position: right;}
  `;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  /* background-color: #18191a; */
  background-image: linear-gradient(147deg, #800000 0%, #000000 74%);
  /* background-image: linear-gradient(147deg, #242526 0%, #000000 74%); */
  background-size: 400%;
  animation-name: ${breatheAnimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const LoginContainer = styled.div`
  padding: 50px;
  opacity: 0.8;
  width: 60%;
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 760px) {
    width: 80%;
    padding: 20px;
  }
`;

const Logo = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 12px 30px;
  background-color: #fff;
  border-radius: 5px;
  font-weight: 800;
  font-size: 16px;
  border: 2px dashed red;
  font-family: "Montserrat", sans-serif;
`;
