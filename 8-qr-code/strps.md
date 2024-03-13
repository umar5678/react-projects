### Overview

- QrCode component renders a QR code generator UI.
- Allows user to enter text input, click generate button
- to convert text to QR code value, and display generated
- QR code image. Uses react-qr-code library to generate
- QR code image from input text.

### Steps

- Set up the project and component files.
- Import the react-qr-code package for generating QR codes.
- Set up state variables using useState hook:

  - qrCode - will hold the generated QR code
  - text - will hold the user entered text

- Create a generateQr function that will:

  - Set qrCode state to the value of text state
  - Clear the text state

- **In the JSX:**

- Import react-qr-code
- Set up state variables
- Create generateQr function to generate QR code
- Get user input and update text state
- Display QR code by passing qrCode state
- Add styling
