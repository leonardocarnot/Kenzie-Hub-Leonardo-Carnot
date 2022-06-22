import { useState } from "react";
import { useForm } from "react-hook-form"
import api from "../../services/api";
import "./style.css"


export const ModalDashboard = ({handleCloseModal,techs,setTechs}) =>{
  const {register, handleSubmit} = useForm();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const onSubmitFunction = (data) => {
    api
      .post(
        `/users/techs`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => setTechs([...techs, response.data]))
      .catch((err) => console.log(err));
  };

    return(
        <div className="ModalDashboard">
        <div className="headerForm">
          <p>Cadastrar Tecnologia</p>
          <button onClick={handleCloseModal}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label>Nome</label>
          <input name="title" type="text" placeholder="Typescript" {...register("title")}/>
          <label>Selecionar status</label>
          <select name="status" {...register("status")}>
            <option value="">Selecione o status</option>
            <option value={"Iniciante"}>Iniciante</option>
            <option value={"Intermediário"}>Intermediário</option>
            <option value={"Avançado"}>Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
        </div>
    )
}