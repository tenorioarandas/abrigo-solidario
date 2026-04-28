import S from "./footer.module.scss";
import logo from "../assets/icons/logo.png";

export default function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.container}>
        <div className={S.boxInfo}>
          <img src={logo} alt="Logo Abrigo Solidário" className={S.logo} />
          <p>
            Conectando solidariedade para transformar vidas em momentos de
            crise.
          </p>
        </div>

        <div className={S.boxLinks}>
          <div className={S.column}>
            <h4>Institucional</h4>
            <a href="#">Sobre nós</a>
            <a href="#">Como funciona</a>
            <a href="#">Transparência</a>
          </div>
          <div className={S.column}>
            <h4>Suporte</h4>
            <a href="#">Dúvidas frequentes</a>
            <a href="#">Contato</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </div>

      <div className={S.copy}>
        <p>
          &copy; {new Date().getFullYear()} Abrigo Solidário. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
