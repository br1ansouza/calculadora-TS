import * as readline from 'readline';

class Calculadora {
  adicionar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }

  porcentagem(base: number, percentual: number): number {
    return (base * percentual) / 100;
  }
}

// interface para leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calc = new Calculadora();

const solicitarEntrada = () => {
  rl.question(
    `Escolha uma operação 
    Para adicionar, digite:   1.
    Para subtrair, digite:    2.
    Para multiplicar, digite: 3.
    Para dividir, digite:     4.
    Para porcentagem, digite: 5.
    `,
    (operacao) => {
      rl.question("Digite o primeiro número: ", (num1) => {
        rl.question("Digite o segundo número: ", (num2) => {
          const a = parseFloat(num1);
          const b = parseFloat(num2);

          try {
            let resultado: number;

            switch (operacao.toLowerCase()) {
              case "1":
                resultado = calc.adicionar(a, b);
                break;
              case "2":
                resultado = calc.subtrair(a, b);
                break;
              case "3":
                resultado = calc.multiplicar(a, b);
                break;
              case "4":
                resultado = calc.dividir(a, b);
                break;
              case "5":
                resultado = calc.porcentagem(a, b);
                break;
              default:
                console.log("Operação inválida. Tente novamente.");
                rl.close();
                return;
            }

            console.log(`Resultado: ${resultado}`);
          } catch (error) {
            console.log(`Erro: ${(error as Error).message}`);
          }

          rl.close();
        });
      });
    }
  );
};

solicitarEntrada();
