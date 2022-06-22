import Logo from "./../../assets/Logo.svg";
import ".";
import { Container, Content, FormContainer, HeaderContent} from "./styles";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"
import api from "../../services/api";

function PageLogin({authenticated , setAuthenticated}) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"), 
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        const { name } = response.data.user;
        const { course_module } = response.data.user;
        const { id } = response.data.user;
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(name));
        localStorage.setItem("module", JSON.stringify(course_module));
        localStorage.setItem("id", JSON.stringify(id));

        toast.success('Sucesso ao logar');

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => {toast.error('Erro, email ou senha inválidos')});
  };
  
  if(authenticated){
    return <Redirect to="/dashboard"/>;
  }

  return (
    <Container>
      <Content>
        <HeaderContent>
          <img src={Logo} alt="Logo" />
        </HeaderContent>
        <FormContainer>
          <p>Login</p>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>
              Email{<span className="error">{errors.email?.message}</span>}
            </label>
            <input
              name="email"
              placeholder="Digite seu email"
              {...register("email")}
            />

            <label>
              Senha{<span className="error">{errors.password?.message}</span>}
            </label>
            <input
              name="password"
              placeholder="Digite uma senha"
              type="password"
              {...register("password")}
            />

            <button type="submit">Entrar</button>
          </form>
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">Cadastre-se</Link>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default PageLogin;
