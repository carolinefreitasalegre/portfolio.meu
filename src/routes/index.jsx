import { Route, Routes } from "react-router-dom";
import App from "../app";
import EmailEnviado from "../container/emailenviado";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<App />} />

      <Route path="/emailenviado" element={<EmailEnviado />} />
    </Routes>
  );
}
