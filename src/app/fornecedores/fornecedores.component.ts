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
  celularVazio: boolean = false;
  valorRazao: string;
  valorCnpj: string;
  valorNome: string;
  valorEmail: string;
  valorCpf: string;
  valorCelular: string;
  valorCep: string;

  constructor() { }

  ngOnInit() {
  }

  camposObrigatorios() {
    this.valorRazao = (<HTMLInputElement>document.getElementById("razao")).value;
    this.valorCnpj = (<HTMLInputElement>document.getElementById("cnpj")).value;
    this.valorNome = (<HTMLInputElement>document.getElementById("nome")).value;
    this.valorEmail = (<HTMLInputElement>document.getElementById("email")).value;
    this.valorCpf = (<HTMLInputElement>document.getElementById("cpf")).value;
    this.valorCelular = (<HTMLInputElement>document.getElementById("celular")).value;
    
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
    if(this.valorCelular == "") {
      this.celularVazio = true;
    } else {
      this.celularVazio = false;
    }
    if(this.valorRazao == "" || this.valorCnpj == "" || this.valorNome == "" || this.valorEmail == "" || this.valorCpf == "" || this.valorCelular == "") {
      alert("Campos em vermelho são obrigatórios");
    }
    if(this.valorRazao !== "" && this.valorCnpj !== "" && this.valorNome !== "" && this.valorEmail !== "" && this.valorCpf !== "" && this.valorCelular !== "") {
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
    (<HTMLInputElement>document.getElementById("celular")).value = '';
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

  inputCelularVazio(telefone: string) {
    this.valorCelular = telefone;
    if(telefone == "") {
      this.celularVazio = true;
    } else {
      this.celularVazio = false;
    }
  }

  formataCnpj(cnpj: string) {
    this.valorCnpj = cnpj;
    var novaString = this.valorCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
    (<HTMLInputElement>document.getElementById("cnpj")).value = novaString;
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

  validaCpf(cpf: string) {
    var pg: number = 10;
    var sg: number = 11;
    var i: number;
    var somapg: number = 0;
    var somasg: number = 0;
    var primeirodigito: number;
    var segundodigito: number;

    this.valorCpf = cpf;
    if(this.valorCpf.length != 11 || 
      this.valorCpf == "00000000000" || 
      this.valorCpf == "11111111111" || 
      this.valorCpf == "22222222222" || 
      this.valorCpf == "33333333333" || 
      this.valorCpf == "44444444444" || 
      this.valorCpf == "55555555555" || 
      this.valorCpf == "66666666666" || 
      this.valorCpf == "77777777777" || 
      this.valorCpf == "88888888888" || 
      this.valorCpf == "99999999999") {
        alert("CPF Inválido!");
        (<HTMLInputElement>document.getElementById("cpf")).value = '';
      } else {
        for(i = 0; i <= 8; i++) {
          somapg += parseInt(this.valorCpf.charAt(i)) * pg;
          pg--;
        }
        if(somapg % 11 < 2) {
          primeirodigito = 0;
        } else {
          primeirodigito = 11 - (somapg % 11);
        }
        if(primeirodigito !== parseInt(this.valorCpf.charAt(9))) {
          alert("CPF Inválido!");
          (<HTMLInputElement>document.getElementById("cpf")).value = '';
        } else {
            for(i = 0; i <= 8; i++) {
              somasg += parseInt(this.valorCpf.charAt(i)) * sg;
              sg--;
            }
            somasg += primeirodigito * 2;
            if(somasg % 11 < 2) {
              segundodigito = 0;
            } else {
              segundodigito = 11 - (somasg % 11);
            }
            if(segundodigito !== parseInt(this.valorCpf.charAt(10))) {
              (<HTMLInputElement>document.getElementById("cpf")).value = '';
            } else {
              this.formataCpf((<HTMLInputElement>document.getElementById("cpf")).value);
            }
        }
      }
    
  }

}
