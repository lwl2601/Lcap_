import React from "react";
import "./App.css"; // Adicione estilos conforme necessário

interface WidgetProps {
  color: string;
  icon: string;
  title: string;
  subtitle: string;
  amount: string;
  onClick: () => void;
}

const Widget: React.FC<WidgetProps> = ({
  color,
  icon,
  title,
  subtitle,
  amount,
  onClick,
}) => {
  return (
    <div
      className="col-12 col-md-3 pb-1 pt-1 pt-md-0 pb-md-0"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="row">
        <div className="col-4">
          <div className="widget_home2" style={{ backgroundColor: color }}>
            <i className={icon}></i>
          </div>
        </div>
        <div
          className="col-8 total_ganhos_home"
          style={{ color: "#333", paddingTop: "10px", paddingLeft: "20px" }}
        >
          R${" "}
          <b className="titulo2 esconder_olho" style={{ color: "#333" }}>
            {amount}
          </b>
          <p className="subtitulo" style={{ fontSize: "13px" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="container principal">
      <div className="row">
        <Widget
          color="#baf9de"
          icon="ri-money-dollar-circle-line"
          title="Ganhos Totais"
          subtitle="Total de ganhos"
          amount="3.056,15"
          onClick={() => window.open("financeiro.php", "_self")}
        />
        <Widget
          color="#baeaf9"
          icon="ri-macbook-line"
          title="Meu Perfil"
          subtitle="Visualizar perfil"
          amount=""
          onClick={() => window.open("/pablo_matheus_rhoden", "_blank")}
        />
        {/* Adicione mais widgets conforme necessário */}
      </div>
    </div>
  );
};

export default App;
