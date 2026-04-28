import logo from "../assets/icons/logo.png";
import S from "./header.module.scss";

export default function Header({ onOpenLogin, onOpenRegister }) {
  return (
    <header className={S.header}>
      <div className={S.boxLogo}>
        <img className={S.imgLogo} src={logo} />
      </div>
      <nav className={S.navbar}>
        <ul>
          <li>
            <a className={S.linkNav} href="#">
              Como funciona
            </a>
          </li>
          <li>
            <a className={S.linkNav} href="#">
              Sobre
            </a>
          </li>
          <li>
            <a className={S.linkNav} href="#">
              Dúvidas
            </a>
          </li>
          <li className={S.btnNav}>
            <a className={S.btnOutline} onClick={onOpenLogin}>
              Entrar
            </a>
          </li>
          <li className={S.btnNav}>
            <a button className={S.btnBlue} onClick={onOpenRegister}>
              Cadastrar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
