import Logo from "./../../assets/Logo.svg";
import ".";
import { Container, Content, FormContainer, HeaderContent } from "./styles";
import { Link } from "react-router-dom";

function PageLogin() {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <img src={Logo} alt="Logo" />
        </HeaderContent>
        <FormContainer>
          <p>Login</p>
          <form>
            <label>Email</label>
            <input placeholder="Digite seu email" />

            <label>Senha</label>
            <input placeholder="Digite sua senha" type="password"/>

            <button>Entrar</button>
          </form>
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">Cadastre-se</Link>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default PageLogin;
