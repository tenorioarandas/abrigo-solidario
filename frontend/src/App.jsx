import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/home";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import Footer from "./components/Footer";
import "./globalStyles.scss";

export default function App() {
  const [modalAtivo, setModalAtivo] = useState(null);

  return (
    <>
      <Header
        onOpenLogin={() => setModalAtivo("login")}
        onOpenRegister={() => setModalAtivo("cadastro")}
      />

      {/* Seus outros componentes como Hero, Stats, etc */}

      {modalAtivo === "login" && (
        <LoginModal onClose={() => setModalAtivo(null)} />
      )}

      {modalAtivo === "cadastro" && (
        <RegisterModal onClose={() => setModalAtivo(null)} />
      )}
      <Home />
      <Footer />
    </>
  );
}
