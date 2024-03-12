// 4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.
// ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO

const ordenSuperior = (data, callback) => callback(data);

const lower = (data) => data.toLowerCase();

const upper = (data) => data.toUpperCase();

const execute04 = () => {
  console.log(`PejeLagarto minus: `, ordenSuperior("PejeLagarto", lower));
  console.log(`PejeLagarto mayus: `, ordenSuperior("PejeLagarto", upper));
};
