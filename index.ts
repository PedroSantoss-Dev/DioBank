interface Iconta{
    nomeTitular:string
    saldo: number  
}
class Conta{
   private nomeTitular: string
   private saldo: number
   private ativa : boolean = true

   constructor({
    nomeTitular,
    saldo = 0,
   }: Iconta){
    this.nomeTitular = nomeTitular,
    this.saldo = saldo
    console.log(`${this.nomeTitular}, bem vindo a Dio Bank`)
   }
   meuSaldo = (): boolean => {
     if(!this.ativa){
        console.log('essa conta esta desativada impossivel olhar o saldo')
        return this.ativa
     } 
     console.log(`seu saldo atual é de ${this.saldo}`)
     return this.ativa
   }
   depositar = (valor: number): void | boolean => {
    if(!this.ativa){
        console.log('Conta desativad, impossivel realizar depósito')
         return this.ativa
    }
    this.saldo += valor
    console.log( `você depositou ${valor}. seu novo saldo é ${this.saldo}`)
   }
   sacar = (valor: number): boolean => {
   if(!this.ativa){
    console.log('conta desativada,impossivel realizar o saque ')
    return this.ativa
   }
    if(valor <= this.saldo){
        this.saldo -= valor
        console.log( `você sacou ${valor}. seu novo saldo é ${this.saldo}`)
        return this.ativa
    }
    console.log( `você tentou sacar ${valor}. seu saldo é insuficiente `) 
    return this.ativa
   }
   cancelarConta = () => {
    if(this.saldo === 0){
        this.ativa = false
        console.log(`conta desativada`)
        return this.ativa 
    }
    console.log(`No momento não vai ser possivel desativar essa conta pois ainda possui saldo ativo ${this.saldo} `)
   }
}

const ContaA =  new Conta({nomeTitular: 'Pedro', saldo: 1000.00})

console.log('Antes do deposito',ContaA.meuSaldo())

ContaA.depositar(2000)

console.log(ContaA.meuSaldo())

ContaA.sacar(3000)

ContaA.cancelarConta()
ContaA.depositar(2000)
console.log(ContaA.meuSaldo())

////desafio fazer mais contas e consegir fazer transações entre elas
