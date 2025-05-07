import React from "react";

import { Container } from "./styles";
import { FormArea } from "../../components/FormArea";
import { QrCodeArea } from "../../components/QrCodeArea";

export const Home: React.FC = () => {
  return (
    <Container>
      <QrCodeArea />
      <FormArea />
    </Container>
  );
};
