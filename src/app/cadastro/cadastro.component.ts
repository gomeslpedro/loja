import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']

})
export class CadastroComponent {
  public obj: Cliente = new Cliente();
  public mensagem: String = "";

  public carregar(){
    let json : any = localStorage.getItem("cliente");
    if(json!=null){
      this.obj = JSON.parse(json);
    } else {
      this.mensagem = "Insira os dados para um novo cadastro";
    }
  }
  
  public gravar(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    this.mensagem = "Cadastro realizado com sucesso!";
  }

  public logout(){
    localStorage.removeItem("cliente");
    window.location.href="./login";
  }
}
