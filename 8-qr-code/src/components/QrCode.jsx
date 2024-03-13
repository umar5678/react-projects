/**
 * QrCode component renders a QR code generator UI.
 * Allows user to enter text input, click generate button
 * to convert text to QR code value, and display generated
 * QR code image. Uses react-qr-code library to generate
 * QR code image from input text.
 */
import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [qrCode, setQrCode] = useState("");
  const [text, setText] = useState("");

  function generateQr() {
    setQrCode(text);
    setText("");
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="Enter the text to be converted to QR code"
        className="p-2 border-2 border-gray-300 rounded-md w-80"
      />
      <button
        className="px-2 py-1 bg-emerald-500 my-4 text-white rounded-md disabled:bg-gray-500"
        onClick={generateQr}
        disabled={text && text.trim() !== "" ? false : true}
      >
        Generate QR code
      </button>
      <div>
        <QRCode value={qrCode} className="h-80 w-80" />
      </div>
    </div>
  );
};

export default QrCode;
