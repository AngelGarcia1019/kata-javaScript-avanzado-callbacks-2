// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
const displayMessage = (callback, mensaje) => callback(mensaje);

const execute01 = () => {
  displayMessage(console.log, "Este es un mensaje de log");
  displayMessage(console.warn, "Este es un mensaje de advertencia");
  displayMessage(console.info, "Este es un mensaje informativo");
};
