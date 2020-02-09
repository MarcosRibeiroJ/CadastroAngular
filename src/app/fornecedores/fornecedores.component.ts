import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  razaoVazio: boolean = false;
  cnpjVazio: boolean = false;
  nomeVazio: boolean = false;
  emailVazio: boolean = false;
  cpfVazio: boolean = false;
  telefoneVazio: boolean = false;
  valorRazao: string;
  valorCnpj: string;
  valorNome: string;
  valorEmail: string;
  valorCpf: string;
  valorTelefone: string;

  constructor() { }

  ngOnInit() {
  }

  camposObrigatorios() {
    this.valorRazao = (<HTMLInputElement>document.getElementById("razao")).value;
    this.valorCnpj = (<HTMLInputElement>document.getElementById("cnpj")).value;
    this.valorNome = (<HTMLInputElement>document.getElementById("nome")).value;
    this.valorEmail = (<HTMLInputElement>document.getElementById("email")).value;
    this.valorCpf = (<HTMLInputElement>document.getElementById("cpf")).value;
    this.valorTelefone = (<HTMLInputElement>document.getElementById("telefone")).value;
    
    if(this.valorRazao == "") {
      this.razaoVazio = true;
    } else {
      this.razaoVazio = false;
    }
    if(this.valorCnpj == "") {
      this.cnpjVazio = true;
    } else {
      this.cnpjVazio = false;
    }
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
    if(this.valorTelefone == "") {
      this.telefoneVazio = true;
    } else {
      this.telefoneVazio = false;
    }
    if(this.valorRazao == "" || this.valorCnpj == "" || this.valorNome == "" || this.valorEmail == "" || this.valorCpf == "" || this.valorTelefone == "") {
      alert("Campos em vermelho são obrigatórios");
    }
    if(this.valorRazao !== "" && this.valorCnpj !== "" && this.valorNome !== "" && this.valorEmail !== "" && this.valorCpf !== "" && this.valorTelefone !== "") {
      alert("Cadastro realizado com sucesso!");
      this.limparCampos();
    }
  }

  limparCampos() {
    (<HTMLInputElement>document.getElementById("razao")).value = '';
    (<HTMLInputElement>document.getElementById("cnpj")).value = '';
    (<HTMLInputElement>document.getElementById("fantasia")).value = '';
    (<HTMLInputElement>document.getElementById("nome")).value = '';
    (<HTMLInputElement>document.getElementById("cpf")).value = '';
    (<HTMLInputElement>document.getElementById("nascimento")).value = '';
    (<HTMLInputElement>document.getElementById("email")).value = '';
    (<HTMLInputElement>document.getElementById("telefone")).value = '';
    (<HTMLInputElement>document.getElementById("cep")).value = '';
    (<HTMLInputElement>document.getElementById("endereco")).value = '';
    (<HTMLInputElement>document.getElementById("numero")).value = '';
    (<HTMLInputElement>document.getElementById("complemento")).value = '';
    (<HTMLInputElement>document.getElementById("bairro")).value = '';
    (<HTMLInputElement>document.getElementById("cidade")).value = '';
    (<HTMLInputElement>document.getElementById("uf")).value = '';
  }

  inputRazaoVazio(razao: string) {
    this.valorRazao = razao;
    if(razao == "") {
      this.razaoVazio = true;
    } else {
      this.razaoVazio = false;
    }
  }

  inputCnpjVazio(cnpj: string) {
    this.valorCnpj = cnpj;
    if(cnpj == "") {
      this.cnpjVazio = true;
    } else {
      this.cnpjVazio = false;
    }
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

  inputTelefoneVazio(telefone: string) {
    this.valorTelefone = telefone;
    if(telefone == "") {
      this.telefoneVazio = true;
    } else {
      this.telefoneVazio = false;
    }
  }

}
