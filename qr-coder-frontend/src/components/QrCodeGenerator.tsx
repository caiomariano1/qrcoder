import { useState } from "react";
import axios from "axios";

export default function QrCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Informe uma URL válida.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/qrcode/generate`, {
        url: url,
      });

      setQrCode(response.data.qrCode);
    } catch (err) {
      console.error("Erro ao gerar QR Code", err);
      alert("Erro ao gerar QR Code.");
    }
  };

  const handleDownload = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL:</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://exemplo.com"
          />
        </label>
        <button type="submit">Gerar QR Code</button>
      </form>

      {qrCode && (
        <>
          <div>
            <h2>QR Code Gerado:</h2>
            <img src={qrCode} alt="QR Code" />
          </div>

          <div>
            <button onClick={() => handleDownload()}>Baixar QR Code</button>
          </div>
        </>
      )}
    </div>
  );
}
