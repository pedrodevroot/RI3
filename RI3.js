// Objeto Telefone - não tem atributo privado

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

// Obejto Endereço - não tem atributo privado

class Endereco {
    constructor(estado, cidade, rua, numero){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getEstadoUpper(){
        return this.estado.toUpperCase();
    }
    getEstadoLower(){
        return this.estado.toLowerCase();
    }
    getCidadeUpper(){
        return this.cidade.toUpperCase();
    }
    getCidadeLower(){
        return this.cidade.toLowerCase();
    }
    getRuaUpper(){
        return this.rua.toUpperCase();
    }
    getRuaLower(){
        return this.rua.toLowerCase();
    }
}

// Obejto Cliente - CPF privado

class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    getNomeUpper(){
        return this.nome.toUpperCase();
    }
    getNomeLower(){
        return this.nome.toLowerCase();
    }

    getCpf(){
        return this.#cpf;
    }

    adicionarTelefone(telefone){
        this.telefones.add(telefone);
    }
    removerTelefone(telefone){
        this.telefones.delete(telefone);
    }
}

//Ibjeto Empresa - CNPJ privado

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();

    }

    adicionarCliente(cliente){
    this.clientes.add(cliente);
    }

    getCnpj(){
        return this.#cnpj;
    }

    getNomeFantasiaUpper(){
        return this.nomeFantasia.toUpperCase();
    }
    getNomeFantasiaLower(){
        return this.nomeFantasia.toLowerCase();
    }
    getRazaoSocialUpper(){
        return this.razaoSocial.toUpperCase();
    }
    getRazaoSocialLower(){
        return this.razaoSocial.toLowerCase();
    }
    
    detalhe(){
        let resultado = `
Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
-----------------------------------
        `
        for(let cliente of this.clientes){

            if(cliente.nome === "Pedro"){
                resultado += "\nEu Pedro Lucas sou o criador desse código"
            }

            resultado += `
Nome: ${cliente.nome}
Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Numero: ${cliente.endereco.numero}\n`
        
        for (let telefone of cliente.telefones){
resultado += `DDD: ${telefone.ddd} Número: ${telefone.numero}\n`
        }
        
    }

    return resultado

}

}

let endereco1 = new Endereco("SP","São Paulo","Rua A",100);
let endereco2 = new Endereco("BH", "Minas Gerais", "Rua do mato", 32);
let endereco3 = new Endereco("AC", "ACre", "Rua do martins", 57);
let endereco4 = new Endereco("SP", "FAVELA", "Se essa rua fosse minha", 754);
let endereco5 = new Endereco("SP", "Campos dos Alemães", "Eu mandava o RATATA", 755);

let empresa = new Empresa("Empresa LTDA","Empresa","123456789", endereco1);

let cliente1 = new Cliente("Pedro","12345678900", endereco1);
let tel1 = new Telefone("11","999999999");
let tel2 = new Telefone("12","4554709613");
cliente1.adicionarTelefone(tel1);
cliente1.adicionarTelefone(tel2);
empresa.adicionarCliente(cliente1);


let cliente2 = new Cliente("XERECA", "54511233", endereco2);
let tel3 = new Telefone("55", "049540562");
let tel4 = new Telefone("66", "4571245555");
cliente2.adicionarTelefone(tel3);
cliente2.adicionarTelefone(tel4);
empresa.adicionarCliente(cliente2);

let cliente3 = new Cliente("Jubileu", "46526878", endereco3);
let tel5 = new Telefone("78", "645146491");
let tel6 = new Telefone("44", "4571246968");
cliente3.adicionarTelefone(tel5);
cliente3.adicionarTelefone(tel6);
empresa.adicionarCliente(cliente3);

let cliente4 = new Cliente("XANAINA", "45712455", endereco4);
let tel7 = new Telefone("45", "4712454668");
let tel8 = new Telefone("54", "4571246968");
cliente4.adicionarTelefone(tel7);
cliente4.adicionarTelefone(tel8);
empresa.adicionarCliente(cliente4);

let cliente5 = new Cliente("XULIANA", "45712569789", endereco5);
let tel9 = new Telefone("44", "54578412555");
let tel10 = new Telefone("77", "4571246968");
cliente5.adicionarTelefone(tel9);
cliente5.adicionarTelefone(tel10);
empresa.adicionarCliente(cliente5);


console.log(empresa.detalhe());




