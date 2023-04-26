const tabuada = (array, callback) => {
  for (numero of array) {
    for (let index = 0; index <= 10; index += 1) {
      let resultado = `${numero} x ${index} = ${numero * index}`;
      callback(resultado);
    }
    console.log("--------------\n");
  }
};

tabuada([1, 5, 2], (resultado) => {
  console.log(resultado);
});
