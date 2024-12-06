import React, { useState } from "react";

const CalendarioInfinito = () => {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false); // Controla a exibição do calendário

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const obterDiasNoMes = (mes, ano) => {
    return new Date(ano, mes + 1, 0).getDate();
  };

  const mudarMes = (offset) => {
    setDataAtual((prevData) => {
      const novaData = new Date(prevData);
      novaData.setMonth(novaData.getMonth() + offset);
      return novaData;
    });
  };

  const renderizarDias = () => {
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();
    const primeiroDia = new Date(ano, mes, 1).getDay();
    const diasNoMes = obterDiasNoMes(mes, ano);

    let dias = [];

    for (let i = 0; i < primeiroDia; i++) {
      dias.push(<div key={`empty-${i}`} style={diaEstiloVazio} />);
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
      dias.push(
        <div key={dia} style={diaEstilo}>
          {dia}
        </div>
      );
    }

    return dias;
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Botão para mostrar/ocultar o calendário */}
      <button
        onClick={() => setMostrarCalendario(!mostrarCalendario)}
        style={botaoCalendarioEstilo}
      >
        {mostrarCalendario ? "Fechar Calendário" : "Calendário"}
      </button>

      {/* Mostrar o calendário somente se "mostrarCalendario" for verdadeiro */}
      {mostrarCalendario && (
        <div style={wrapperEstilo}>
          <div style={containerEstilo}>
            <div style={headerEstilo}>
              <button onClick={() => mudarMes(-1)} style={botaoEstilo}>
                Anterior
              </button>
              <h2>
                {meses[dataAtual.getMonth()]} {dataAtual.getFullYear()}
              </h2>
              <button onClick={() => mudarMes(1)} style={botaoEstilo}>
                Próximo
              </button>
            </div>
            <div style={semanaEstilo}>
              {diasSemana.map((dia, index) => (
                <div key={index} style={diaSemanaEstilo}>
                  {dia}
                </div>
              ))}
            </div>
            <div style={diasEstilo}>{renderizarDias()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarioInfinito;

// Estilos em JSX

const botaoCalendarioEstilo = {
  backgroundColor: "#c29e11",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  marginBottom: "20px", // Adiciona espaço para o calendário aparecer abaixo
};

const wrapperEstilo = {
  display: "flex",
  justifyContent: "center", // Centraliza o calendário horizontalmente
  width: "100%", // Garante que o contêiner ocupe a largura total disponível
};

const containerEstilo = {
  width: "300px",
  height: "370px",
  backgroundColor: "#ccb14a",
  borderRadius: "10px",
  padding: "5px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  fontWeight: "bold",
};

const headerEstilo = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "10px",
};

const botaoEstilo = {
  backgroundColor: "#1d799d",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
};

const semanaEstilo = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridGap: "5px",
};

const diaSemanaEstilo = {
  fontWeight: "bold",
  textAlign: "center",
};

const diasEstilo = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridGap: "5px",
  overflowY: "auto",
  maxHeight: "260px",
};

const diaEstilo = {
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1d799d",
  borderRadius: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
};

const diaEstiloVazio = {
  backgroundColor: "transparent",
};
