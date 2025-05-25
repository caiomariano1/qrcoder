import React, { useState } from "react";
import {
  Container,
  Button,
  FormWrapper,
  Header,
  LogoDivider,
  SuccessMessage,
  InstructionText,
  StyledInput,
  ButtonGroup,
  QrCodeMobile,
} from "./styles";
import logo from "../../assets/logo.png";
import logoEscrita from "../../assets/logo-escrita.png";
import success from "../../assets/success.png";
import { generateQrCode } from "../../services/qrCodeService";
import { QrCodeArea } from "../QrCodeArea";

interface Props {
  onQrCodeGenerated: (url: string) => void;
}

export const FormArea: React.FC<Props> = ({ onQrCodeGenerated }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [qrcodeGerado, setQrcodeGerado] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl) return;

    try {
      const url = await generateQrCode(inputUrl);
      onQrCodeGenerated(url);
      setQrCodeUrl(url);
      setQrcodeGerado(true);
    } catch (error) {
      console.error("Erro ao gerar QR Code:", error);
      setQrcodeGerado(false);
    }
  };

  const handleReset = () => {
    setInputUrl("");
    setQrCodeUrl(null);
    setQrcodeGerado(false);
  };

  const handleDownload = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <img className="logo" src={logo} alt="Logo" />
          <LogoDivider />
          <img className="logo-escrita" src={logoEscrita} alt="Logo Escrita" />
        </Header>

        <QrCodeMobile>
          <QrCodeArea qrCodeUrl={qrCodeUrl} />
        </QrCodeMobile>

        <div>
          <h3>Gerar Qr Code</h3>

          {qrcodeGerado ? (
            <SuccessMessage>
              Qr Code criado com sucesso!
              <img src={success} alt="Sucesso" />
            </SuccessMessage>
          ) : (
            <InstructionText>Insira a URL no campo abaixo:</InstructionText>
          )}

          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://github.com/caiomariano1"
              disabled={qrcodeGerado}
            />
            <ButtonGroup>
              {!qrcodeGerado ? (
                <Button type="submit" disabled={!inputUrl.trim()}>
                  Criar
                </Button>
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={handleReset}
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      border: "1px solid #d1d6d9",
                    }}
                  >
                    Gerar Novo QR Code
                  </Button>
                  <Button type="button" onClick={handleDownload}>
                    Baixar
                  </Button>
                </>
              )}
            </ButtonGroup>
          </form>
        </div>
      </FormWrapper>
    </Container>
  );
};
