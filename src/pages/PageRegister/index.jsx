import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import { FormContainer, Container, HeaderContainer } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify"


function PageRegister({authenticated}) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = { email, password, name, bio, contact, course_module };
    api
      .post("/users", user)
      .then((_) => {
        toast.success('Sucesso ao criar a conta')
        return history.push("/");
      })
      .catch((err) => toast.error('Erro ao criar a conta, tente outro email'));
  };

  if(authenticated){
    return <Redirect to="/dashboard"/>;
  }


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
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label>
              Nome {<span className="error">{errors.name?.message}</span>}
            </label>
            <input
              name="name"
              placeholder="Digite seu nome"
              {...register("name")}
            />

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

            <label>
              Confirmar Senha
              {<span className="error">{errors.passwordConfirm?.message}</span>}
            </label>
            <input
              name="passwordConfirm"
              placeholder="Confirmação de senha"
              type="password"
              {...register("passwordConfirm")}
            />

            <label>
              Bio{<span className="error">{errors.bio?.message}</span>}
            </label>
            <input
              name="bio"
              placeholder="Diga algo sobre você"
              {...register("bio")}
            />

            <label>
              Contato{<span className="error">{errors.contact?.message}</span>}
            </label>
            <input
              name="contact"
              placeholder="Digite seu contato"
              {...register("contact")}
            />

            <label>
              Selecionar módulo
              {<span className="error">{errors.course_module?.message}</span>}
            </label>
            <select name="course_module" {...register("course_module")}>
              <option value="">Selecione um módulo</option>
              <option value={"Primeiro módulo (Introdução ao Frontend)"}>
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value={"Segundo módulo (Frontend Avançado)"}>
                Segundo módulo (Frontend Avançado)
              </option>
              <option value={"Terceiro módulo (Introdução ao Backend)"}>
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value={"Quarto módulo (Backend Avançado)"}>
                Quarto módulo (Backend Avançado)
              </option>
            </select>

            <button type="submit">Cadastrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default PageRegister;
