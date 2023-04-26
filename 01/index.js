const tabuada = (numero, callback) => {
  for (let index = 0; index <= 10; index += 1) {
    let resultado = `${numero} x ${index} = ${numero * index}`;
    callback(resultado);
  }
};

tabuada(5, (resultado) => {
  console.log(resultado);
});
