import BasicButtons from "../components/BasicButtons";
import "../styles/NavLinks.css";
import { useNavigate } from "react-router-dom";

export default function NavLinks() {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <ul className="nav-links">
        <li id="li1">
          <ul className="sub-menu">
            <li>
              <BasicButtons
                name={"LA MARQUE"}
                onClick={() => navigate("/React-LP/lamarque")}
              />
            </li>
            <li>
              <BasicButtons
                name={"HYPER SPORTS CARS"}
                onClick={() => navigate("/React-LP/hypersportscars")}
              />
            </li>
          </ul>
        </li>
        <li id="li2">
          <BasicButtons
            name={"BUGATTI"}
            fontfamily="clamp(10px, 2.5vw, 1000px)"
            onClick={() => navigate("/React-LP")}
          />
        </li>
        <li id="li3">
          <ul className="sub-menu">
            <li>
              <BasicButtons
                name={"NEWSROOM"}
                onClick={() => navigate("/React-LP/newsroom")}
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
