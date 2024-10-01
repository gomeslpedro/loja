import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {
  public mensagem: String = "";
  public obj: Cliente = new Cliente();

  public enviarSenha(){
    this.mensagem="Um email de recuperação de senha foi enviado, verifique sua caixa de entrada!"
  }
}
