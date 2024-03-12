// 3.- Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división.

const operations = {
  sum: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => (b == 0 ? "Infinito" : a / b),
};

const operation = (num1, num2, callback) => callback(num1, num2);

const execute03 = () => {
  const num1 = 10,
    num2 = 5;
  console.log(
    `Suma de ${num1} y ${num2} = `,
    operation(num1, num2, operations["sum"])
  );
  console.log(
    `Resta de ${num1} y ${num2} = `,
    operation(num1, num2, operations["subtraction"])
  );
  console.log(
    `Multiplicación de ${num1} y ${num2} = `,
    operation(num1, num2, operations["multiplication"])
  );
  console.log(
    `División de ${num1} y ${num2} = `,
    operation(num1, num2, operations["division"])
  );
};
