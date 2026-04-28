import { useState } from "react";
import axios from "axios";
import S from "./registerModal.module.scss";

export default function RegisterModal({ onClose }) {
  const [selectedType, setSelectedType] = useState("preciso");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        tipo_usuario: selectedType,
      });

      console.log(response.data);
      alert("Cadastro realizado com sucesso");
      onClose();
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert(error.response?.data?.error || "Erro ao cadastrar usuário");
    }
  };

  return (
    <div className={S.overlay} onClick={onClose}>
      <div className={S.modalBox} onClick={(e) => e.stopPropagation()}>
        <button className={S.closeBtn} onClick={onClose}>
          &times;
        </button>

        <h2>Crie sua conta</h2>
        <p>É rápido, fácil e você já pode começar a ajudar.</p>

        <form className={S.form} onSubmit={handleRegister}>
          <div className={S.inputGroup}>
            <label>Nome completo</label>
            <div className={S.inputWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={S.inputIcon}
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />{" "}
              </svg>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome completo"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={S.inputGroup}>
            <label>E-mail</label>
            <div className={S.inputWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={S.inputIcon}
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />{" "}
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={S.inputGroup}>
            <label>Senha</label>
            <div className={S.inputWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={S.inputIcon}
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />{" "}
              </svg>
              <input
                type="password"
                name="senha"
                placeholder="Crie uma senha"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={S.inputGroup}>
            <label>Confirmar senha</label>
            <div className={S.inputWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={S.inputIcon}
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />{" "}
              </svg>
              <input
                type="password"
                name="confirmarSenha"
                placeholder="Confirme sua senha"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={S.userTypeContainer}>
            <label className={S.mainLabel}>Tipo de usuário</label>

            <div className={S.cardsGroup}>
              <div
                className={`${S.card} ${selectedType === "preciso" ? S.active : ""}`}
                onClick={() => setSelectedType("preciso")}
              >
                <div className={S.iconBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>

                <div className={S.textBox}>
                  <strong>Preciso de abrigo</strong>
                  <span>Estou buscando um abrigo</span>
                </div>
              </div>

              <div
                className={`${S.card} ${selectedType === "oferecer" ? S.active : ""}`}
                onClick={() => setSelectedType("oferecer")}
              >
                <div className={S.iconBox}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>

                <div className={S.textBox}>
                  <strong>Quero oferecer abrigo</strong>
                  <span>Quero disponibilizar um abrigo</span>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className={S.btnSubmit}>
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}
