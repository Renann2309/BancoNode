import { Endereco } from './model/endereco.js';
import { Agencia } from './model/agencia.js';
import { Cliente } from './model/cliente.js';
import { Conta } from './model/conta.js';

let endAg = new Endereco('PE', "Cabo", "Centro", "Rua dos bancos", 878, "", "54500-000");
let agSoftex = new Agencia("Softex", 1234, "81321264554","agsoftex@banco.com", endAg);
let endRenann = new Endereco('PE', "Cabo", "Cohab", "Rua 22", 86, "d", "54520540");
let cliRenann = new Cliente("Renann Souza", "000.000.000-00", new Date("1991-09-23").toLocaleDateString(), 5858585, "renann@softex.com", "8199999999", endRenann);
let contaRenann = new Conta(cliRenann, 4321, agSoftex, 1250.00);

contaRenann.depositar(200);
contaRenann.sacar(1000);
contaRenann.sacar(451);

console.log(contaRenann);