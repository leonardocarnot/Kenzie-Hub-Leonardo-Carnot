import { Container } from "./styles";
import trash from "./../../assets/trash.svg";
import { useState } from "react";
import api from "../../services/api";

function CardDashboard({ title, status, id ,techs,setTechs}) {
  
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const deleteTech = () => {
    api
      .delete(
        `/users/techs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then(setTechs(techs.filter((tech)=>{
          return tech.id !== id;
        })))
      .catch((err) => console.log(err));
  };

  return (<>
    <Container>
      <div className="wholeCard">
        <p>{title}</p>
        <div className="cardInformation">
        <span>{status}</span>
        <button onClick={deleteTech}><img src={trash} alt="botão de deletar"/></button>
        </div>
      </div>
    </Container>
  </>
  );
}

export default CardDashboard;
