import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png";
import logoEscrita from "../../assets/logo-escrita.png";

export const FormArea: React.FC = () => {
  return (
    <Container>
      <div
        style={{
          backgroundColor: "white",
          padding: "48px",
          border: "4px solid #D1D6D9",
          borderRadius: "0 16px 0 16px",
        }}
      >
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
            style={{
              width: "1px",
              height: "82px",
              backgroundColor: "#D1D6D9",
              borderRadius: "8px",
            }}
          ></div>
          <img
            src={logoEscrita}
            alt="QR Code"
            style={{ width: "288px", height: "82px", objectFit: "contain" }}
          />
        </div>
        <div>
          <h3
            style={{ fontWeight: 700, fontSize: "24px", margin: "48px 0 24px" }}
          >
            Gerar Qr Code
          </h3>
          <p
            style={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#81888C",
              margin: "0 0 16px",
            }}
          >
            Insira a URL no campo abaixo:
          </p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "60px",
              justifyContent: "space-between",
            }}
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
