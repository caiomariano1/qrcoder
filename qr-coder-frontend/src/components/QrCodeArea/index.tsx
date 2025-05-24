import { Container } from "./styles";
import qrCode from "../../assets/qrcode-image.png";

interface Props {
  qrCodeUrl: string | null;
}

export const QrCodeArea: React.FC<Props> = ({ qrCodeUrl }) => {
  return (
    <Container>
      <div>
        {qrCodeUrl ? (
          <img
            src={qrCodeUrl}
            alt="QR Code"
            style={{
              width: "448px",
              border: "1.83px solid #d1d6d9",
              borderRadius: "16px",
            }}
          />
        ) : (
          <img src={qrCode} alt="QR Code" />
        )}
      </div>
    </Container>
  );
};
