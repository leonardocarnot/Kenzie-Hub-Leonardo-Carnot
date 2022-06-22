import Routes from "./routes";
import GlobalStyle from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        toastStyle
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
    </>
  )
    ;
}

export default App;
