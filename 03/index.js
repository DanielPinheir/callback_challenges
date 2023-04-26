const rodadaDoJogo = (arrayJogadores) => {
  const tempoDaRodadaEmSeg = 10;
  const tempoPorJogadorEmSeg = tempoDaRodadaEmSeg / jogadores.length;
  let index = 0;
  console.log("Início de rodada!");
  console.log(`Vez do(a) ${arrayJogadores[0]}.`);
  const vezDoJogador = () => {
    index++;

    if (index >= arrayJogadores.length) {
      console.log("A rodada terminou!");
      clearInterval(rodada);
      return;
    }
    console.log(`Vez do(a) ${arrayJogadores[index]}.`);
  };
  const rodada = setInterval(vezDoJogador, tempoPorJogadorEmSeg * 1000);
};

const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

rodadaDoJogo(jogadores);
