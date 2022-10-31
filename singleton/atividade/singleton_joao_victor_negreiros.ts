class Highlander {
  private constructor () {}

  private static instancia: Highlander;

  private invocacoes = 0;

  static obterInstancia(): Highlander {
    if (!this.instancia) {
      this.instancia = new Highlander()
    }

    this.instancia.invocacoes += 1;
    return this.instancia
  }


  static totalInvocacoes(): number {
    return Highlander.instancia.invocacoes;
  }
}


class Fabrica {
  static main(num: number): void {
    for (let i = 0; i < num; i++) {
      Highlander.obterInstancia()
    }

    const total = Highlander.totalInvocacoes()

    console.log('Input: ', num);
    console.log('Total de invocacoes: ', total);
  }
}

// Main
Fabrica.main(5)