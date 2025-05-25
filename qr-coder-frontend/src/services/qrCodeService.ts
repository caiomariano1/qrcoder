import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const generateQrCode = async (url: string): Promise<string> => {
  const response = await axios.post(`${baseUrl}/api/qrcode/post`, { url });
  return response.data.qrCode;
};
