// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

const timesGreaterThanTwoHours = (times, callback) =>
  callback(times.filter((time) => time > 120));

const execute05 = () => {
  const times = [120, 80, 200, 100];

  timesGreaterThanTwoHours(times, (filteredTimes) =>
    console.log("Mayores a dos horas: ", filteredTimes)
  );
};
