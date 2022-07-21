//Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia //this refere-se ao obj conta bancaria
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0 //com underline por causa do getter e setter
    }

    //Dentro de ContaBancaria, construa o getter e o setter de saldo;

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor
    }

    //Dentro de ContaBancaria, crie os métodos sacar e depositar;
    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor
        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

    //Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

class ContaCorrente extends ContaBancaria { //o super precisa de uma classe pai entao o extends associa, senao nao funciona
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero) //mandando pra conta corrente o que foi setado na class pai
        this.tipo = 'corrente' //Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão; - nao tenho ctz se foi aqui que foi feito isso
        this._cartaoCredito = cartaoCredito
    }
    //Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor //verificar se a pessoa tem ou nao cartao de credito, vai retornar false or true
    }
}

    //Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
    
    class ContaPoupanca extends ContaBancaria{
        constructor(agencia, numero){
            super(agencia, numero)
            this.tipo = 'poupança'
        }
    }

    //Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;

    class ContaUniversitaria extends ContaBancaria {
        constructor(agencia, numero){
            super(agencia, numero) 
            this.tipo = 'universitária'
        }

        //Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
        //sobreescrevendo o metodo sacar

        sacar(valor){
            if(valor > 500){
                return 'Operacao negada'
            }
            this._saldo = this._saldo - valor //podemos acessar o saldo pela classe filha
        }
    }
