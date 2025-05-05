import "./App.css";
import QrCodeGenerator from "./components/QrCodeGenerator";
import logo from "../src/assets/logo.png";
import logoEscrita from "../src/assets/logo-escrita.png";

function App() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" />
        |
        <img src={logoEscrita} alt="Logo escrita" />
      </div>
      <div>
        <h1>Gerar QR Code</h1>
        <QrCodeGenerator />
      </div>
    </>
  );
}

export default App;
