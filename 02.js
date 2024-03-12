// 2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

const typeDataOf = (variable, callback) => callback(typeof variable, variable);

const execute02 = () => {
  typeDataOf(10, (tipo, contenido) => {
    console.log(`Tipo de dato: ${tipo}`);
    console.log(`Contenido: ${contenido}`);
  });

  typeDataOf("Hi", (tipo, contenido) => {
    console.log(`Tipo de dato: ${tipo}`);
    console.log(`Contenido: ${contenido}`);
  });
};
