import {TRANSACAO } from "./transacao.js";
import { TIPOTRANSACAO } from "./tipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.saldo = saldo;
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date().toLocaleDateString();
        this.status = true;
        this.transacoes = [];
    }
//depositar
    depositar(valor){
        this.saldo += valor;
        let trans = new TRANSACAO(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }
    //sacar
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            let trans = new TRANSACAO(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        }else{
            console.log('\n saldo insuficiente: xxxx \n' +  "\n" + " valor de saque: " +  valor + " Reais, " + " maior do que o saldo atual: \n" + this.saldo + " reais");
        
        }
    }
 }
