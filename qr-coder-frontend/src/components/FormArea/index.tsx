import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png";
import logoEscrita from "../../assets/logo-escrita.png";

export const FormArea: React.FC = () => {
  return (
    <Container>
      <div style={{ backgroundColor: "white", padding: "48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderBottom: "2px solid #D1D6D9",
          }}
        >
          <img
            src={logo}
            alt="QR Code"
            style={{ width: "127px", height: "110px", margin: "23px 0" }}
          />
          <div
            style={{ width: "1px", height: "82px", backgroundColor: "#D1D6D9" }}
          ></div>
          <img
            src={logoEscrita}
            alt="QR Code"
            style={{ width: "288px", height: "82px" }}
          />
        </div>
        <div>
          <h3>Gerar Qr Code</h3>
          <p>Insira a URL no campo abaixo:</p>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "60px" }}
          >
            <input
              type="text"
              value={""}
              // onChange={}
              placeholder="https://github.com/caiomariano1"
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button type="submit" style={{ width: "max-content" }}>
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
