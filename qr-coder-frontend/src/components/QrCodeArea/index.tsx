import React from "react";
import { Container } from "./styles";
import qrCode from "../../assets/qrcode-image.png";

interface Props {}

export const QrCodeArea: React.FC<Props> = ({}) => {
  return (
    <Container>
      <div>
        <img src={qrCode} alt="QR Code" />
      </div>
    </Container>
  );
};
