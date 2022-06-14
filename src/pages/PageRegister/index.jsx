import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import { FormContainer, Container, HeaderContainer } from "./styles";

function PageRegister() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <img src={Logo} alt="Logo" />
          <Link to="/">Voltar</Link>
        </HeaderContainer>
        <FormContainer>
          <p>Crie sua conta</p>
          <span>Rapido e grátis, vamos nessa</span>
          <form>
            <label>Nome</label>
            <input placeholder="Digite seu nome"/>

            <label>Email</label>
            <input placeholder="Digite seu email"/>

            <label>Senha</label>
            <input placeholder="Digite uma senha" type="password"/>

            <label>Confirmar Senha</label>
            <input placeholder="Confirmação de senha" type="password"/>

            <label>Bio</label>
            <input placeholder="Diga algo sobre você"/>

            <label>Contato</label>
            <input placeholder="Digite seu contato"/>

            <label>Selecionar módulo</label>
            <select>
              <option value={"Primeiro Módulo"}>Primeiro Módulo</option>
              <option value={"Segundo Módulo"}>Segundo Módulo</option>
              <option value={"Terceiro Módulo"}>Terceiro Módulo</option>
            </select>

            <button>Cadastrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default PageRegister;
