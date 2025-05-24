import React, { useState } from "react";

import { Container, QrCodeDesktop } from "./styles";
import { FormArea } from "../../components/FormArea";
import { QrCodeArea } from "../../components/QrCodeArea";

export const Home: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  return (
    <Container>
      <QrCodeDesktop>
        <QrCodeArea qrCodeUrl={qrCodeUrl} />
      </QrCodeDesktop>
      <FormArea onQrCodeGenerated={setQrCodeUrl} />
    </Container>
  );
};
