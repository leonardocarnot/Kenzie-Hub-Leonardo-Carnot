import { Redirect } from "react-router-dom";
import {
  Container,
  DashboardBody,
  DashboardHeader,
  HeaderDashboard,
  InfoUser,
  WholeDashboard,
} from "./styles";
import Logo from "./../../assets/Logo.svg";
import plus from "./../../assets/plus.svg";
import Modal from "react-modal";
import { useState } from "react";
import { ModalDashboard } from "../../components/ModalDashboard";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import api from "../../services/api";
import { useEffect } from "react";


Modal.setAppElement("#root");

function Dashboard({ authenticated }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );
  const [id] = useState(JSON.parse(localStorage.getItem("id")) || "");
  const  [techs,setTechs] = useState([]);
  console.log(techs)

  const loadTechs = () => {
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => "Erro de conexão.");
  };

  useEffect(() => loadTechs(), []);


  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const backLoginPage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalDashboard handleCloseModal={handleCloseModal} techs={techs} setTechs={setTechs} id={id}/>
      </Modal>
      <HeaderDashboard>
        <img src={Logo} alt="Logo" />
        <button onClick={backLoginPage}>Sair</button>
      </HeaderDashboard>
      <InfoUser>
        <p>Olá, {JSON.parse(localStorage.getItem("user"))}</p>
        <span>{JSON.parse(localStorage.getItem("module"))}</span>
      </InfoUser>
      <WholeDashboard>
        <DashboardHeader>
          <p>Tecnologias</p>
          <button onClick={handleOpenModal}>
            <img src={plus} alt="plus" />
          </button>
        </DashboardHeader>
        <DashboardBody>
        {techs &&
        techs.map((tech,index)=>{
          return (
         <CardDashboard key={index} title={tech.title} status={tech.status} id={tech.id} techs={techs} setTechs={setTechs}/>
          )
        })

        }
        </DashboardBody>
      </WholeDashboard>
    </Container>
  );
}

export default Dashboard;
