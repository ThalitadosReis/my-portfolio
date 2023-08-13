import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="align-items-center row">
          <div className="col" size={12} sm={6}>
            <span>
              dos<b>Reis</b>
            </span>
          </div>
          <div size={12} sm={6} className="text-center text-sm-end col">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/thalitadosreis/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/ThalitadosReis">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
