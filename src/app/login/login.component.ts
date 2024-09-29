import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public obj: Cliente = new Cliente();
  public mensagem: String = "";

  public fazerLogin(){
    if(this.obj.email=='felipe@felipe.com.br' && this.obj.senha=='123456'){
      localStorage.setItem("cliente", JSON.stringify(this.obj));
      window.location.href="./vitrine";
    } else {
      this.mensagem = "Email ou senha inválidos!";
    }
  }
}
