const timer = (tempoParaAlarmarEmSegundos, tempoAlarmandoEmSegundos) => {
  console.log(
    `Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`
  );
  const alarme = () => {
    let quantidadeDeAlerta = 0;
    const contador = () => {
      console.log("Beep beep!");
      quantidadeDeAlerta++;
      if (quantidadeDeAlerta >= tempoAlarmandoEmSegundos) {
        clearInterval(disparaAlarme);
      }
    };
    const disparaAlarme = setInterval(contador, 1000);
  };
  setTimeout(alarme, tempoParaAlarmarEmSegundos * 1000);
};

timer(10, 5);
