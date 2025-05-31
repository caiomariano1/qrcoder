import React, { useState } from "react";

import { Container, FormWrapperDesktop, QrCodeDesktop } from "./styles";
import { FormArea } from "../../components/FormArea";
import { QrCodeArea } from "../../components/QrCodeArea";

export const Home: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  return (
    <Container>
      <QrCodeDesktop>
        <QrCodeArea qrCodeUrl={qrCodeUrl} />
      </QrCodeDesktop>
      <FormWrapperDesktop>
        <FormArea
          onQrCodeGenerated={setQrCodeUrl}
          onResetQrCode={() => setQrCodeUrl("")}
        />
      </FormWrapperDesktop>
    </Container>
  );
};
