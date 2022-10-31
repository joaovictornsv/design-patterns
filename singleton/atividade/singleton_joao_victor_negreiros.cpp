#include <iostream>
using std::cin;
using std::cout;
using std::endl;

class Highlander {
  private:
    Highlander() {};
    static Highlander* instancia;
    static int invocacoes;

  public:
    static Highlander* obterInstancia() {
      if (instancia == nullptr) {
        instancia = new Highlander();
      }

      invocacoes += 1;
      return instancia;
    }

    static int totalInvocacoes() {
      return invocacoes;
    }
};

// Inicializacao dos atributos de Highlander
Highlander* Highlander::instancia = nullptr;
int Highlander::invocacoes = 0;


class Fabrica {
  public:
    static void main() {
      int numInstancias;

      cout << "Qtd de instancias: ";
      cin >> numInstancias;

      for (int i = 0; i < numInstancias; i++) {
        Highlander::obterInstancia();
      }
      
      cout << "---------------------" << endl;
      cout << "Total de invocacoes: " << Highlander::totalInvocacoes() << endl;
      
    }
};

int main(){
  Fabrica::main();

  return 0;
}