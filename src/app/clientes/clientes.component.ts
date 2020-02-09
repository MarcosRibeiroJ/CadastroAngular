import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  nomeVazio: boolean = false;
  emailVazio: boolean = false;
  cpfVazio: boolean = false;
  celularVazio: boolean = false;
  valorNome: string;
  valorEmail: string;
  valorCpf: string;
  valorCelular: string;
  valorCep: string;

  constructor() { }

  ngOnInit() {
  }

  camposObrigatorios() {
    this.valorNome = (<HTMLInputElement>document.getElementById("nome")).value;
    this.valorEmail = (<HTMLInputElement>document.getElementById("email")).value;
    this.valorCpf = (<HTMLInputElement>document.getElementById("cpf")).value;
    this.valorCelular = (<HTMLInputElement>document.getElementById("celular")).value;
    if(this.valorNome == "") {
      this.nomeVazio = true;
    } else {
      this.nomeVazio = false;
    }
    if(this.valorEmail == "") {
      this.emailVazio = true;
    } else {
      this.emailVazio = false;
    }
    if(this.valorCpf == "") {
      this.cpfVazio = true;
    } else {
      this.cpfVazio = false;
    }
    if(this.valorCelular == "") {
      this.celularVazio = true;
    } else {
      this.celularVazio = false;
    }
    if(this.valorNome == "" || this.valorEmail == "" || this.valorCpf == "" || this.valorCelular == "") {
      alert("Campos em vermelho são obrigatórios");
    }
    if(this.valorNome !== "" && this.valorEmail !== "" && this.valorCpf !== "" && this.valorCelular !== "") {
      alert("Cadastro realizado com sucesso!");
      this.limparCampos();
    }
  }

  limparCampos() {
    (<HTMLInputElement>document.getElementById("nome")).value = '';
    (<HTMLInputElement>document.getElementById("cpf")).value = '';
    (<HTMLInputElement>document.getElementById("nascimento")).value = '';
    (<HTMLInputElement>document.getElementById("email")).value = '';
    (<HTMLInputElement>document.getElementById("celular")).value = '';
    (<HTMLInputElement>document.getElementById("cep")).value = '';
    (<HTMLInputElement>document.getElementById("endereco")).value = '';
    (<HTMLInputElement>document.getElementById("numero")).value = '';
    (<HTMLInputElement>document.getElementById("complemento")).value = '';
    (<HTMLInputElement>document.getElementById("bairro")).value = '';
    (<HTMLInputElement>document.getElementById("cidade")).value = '';
    (<HTMLInputElement>document.getElementById("uf")).value = '';
  }

  inputNomeVazio(nome: string) {
    this.valorNome = nome;
    if(nome == "") {
      this.nomeVazio = true;
    } else {
      this.nomeVazio = false;
    }
  }

  inputEmailVazio(email: string) {
    this.valorEmail = email;
    if(email == "") {
      this.emailVazio = true;
    } else {
      this.emailVazio = false;
    }
  }

  inputCpfVazio(cpf: string) {
    this.valorCpf = cpf;
    if(cpf == "") {
      this.cpfVazio = true;
    } else {
      this.cpfVazio = false;
    }
  }

  inputCelularVazio(telefone: string) {
    this.valorCelular = telefone;
    if(telefone == "") {
      this.celularVazio = true;
    } else {
      this.celularVazio = false;
    }
  }

  formataCpf(cpf: string) {
    this.valorCpf = cpf;
    var novaString = this.valorCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    (<HTMLInputElement>document.getElementById("cpf")).value = novaString;
  }

  formataCelular(celular: string) {
    this.valorCelular = celular;
    var novaString = this.valorCelular.replace(/(\d{2})(\d{5})(\d{4})/g,"\(\$1\)\$2\-\$3");
    (<HTMLInputElement>document.getElementById("celular")).value = novaString;
  }

  formataCep(cep: string) {
    this.valorCep = cep;
    var novaString = this.valorCep.replace(/(\d{5})(\d{3})/g,"\$1\-\$2");
    (<HTMLInputElement>document.getElementById("cep")).value = novaString;
  }

}
