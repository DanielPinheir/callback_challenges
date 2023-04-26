const timer = (
  tempoParaAlarmarEmSegundos,
  tempoAlarmandoEmSegundos,
  tempoSonecaEmSegundos,
  numeroDeSonecas
) => {
  const msgTimer = `Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`;

  const msgSoneca = `Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`;

  const msgFim = `Fim do Timer!`;

  const alarmeTimer = () => {
    let quantidadeDeAlerta = 0;
    const contadorTimer = () => {
      console.log("Beep beep!");
      quantidadeDeAlerta++;
      if (quantidadeDeAlerta >= tempoAlarmandoEmSegundos) {
        clearInterval(disparaAlarmeTimer);
      }
    };
    const disparaAlarmeTimer = setInterval(contadorTimer, 1000);
  };

  const alarmeSoneca = () => {
    let quantidadeDeAlerta = 0;
    const contadorSoneca = () => {
      console.log("Beep beep!");
      quantidadeDeAlerta++;
      if (quantidadeDeAlerta >= tempoAlarmandoEmSegundos) {
        clearInterval(disparaAlarmeSoneca);
      }
    };
    const disparaAlarmeSoneca = setInterval(contadorSoneca, 1000);
  };

  setTimeout(() => console.log(msgTimer));
  setTimeout(alarmeTimer, tempoParaAlarmarEmSegundos * 1000);

  let tempoDisparoMsgSoneca =
    tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos + 1;

  let tempoDisparoAlarmeSoneca =
    tempoParaAlarmarEmSegundos +
    tempoAlarmandoEmSegundos +
    tempoSonecaEmSegundos;

  for (let index = 0; index < numeroDeSonecas; index += 1) {
    setTimeout(() => console.log(msgSoneca), tempoDisparoMsgSoneca * 1000);
    setTimeout(alarmeSoneca, tempoDisparoAlarmeSoneca * 1000);

    tempoDisparoMsgSoneca += tempoSonecaEmSegundos + tempoAlarmandoEmSegundos;
    tempoDisparoAlarmeSoneca +=
      tempoSonecaEmSegundos + tempoAlarmandoEmSegundos;
  }

  setTimeout(() => console.log(msgFim), tempoDisparoMsgSoneca * 1000);
};

timer(10, 5, 10, 2);
