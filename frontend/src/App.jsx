import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, Detalhes } from "@/layouts";
import AgendamentosDetalhe from "./pages/dashboard/Detalhes/AgendamentoDetalhe";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/detalhes/*" element={<Detalhes/>} />
    </Routes>
  );
}

export default App;
