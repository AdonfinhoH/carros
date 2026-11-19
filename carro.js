
class Carro {
    
    constructor(marca, modelo, ano, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }

  
    exibirInformacoes() {
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano} | Preço: R$ ${this.preco.toFixed(2)}`);
    }

  
    aplicarDesconto(percentual) {
        const valorDesconto = this.preco * (percentual / 100);
        this.preco -= valorDesconto;
    }
}


const carro1 = new Carro("Toyota", "Corolla", 2022, 80000);
const carro2 = new Carro("Honda", "City", 2024, 70000);


console.log("--- Informações Iniciais ---");
carro1.exibirInformacoes();
carro2.exibirInformacoes();
carro1.aplicarDesconto(10);

console.log("\n--- Após aplicar 10% de desconto no Veículo 1 ---");
carro1.exibirInformacoes();
carro2.exibirInformacoes();
