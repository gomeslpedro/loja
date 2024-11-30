import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  obj = {
    email: '',
    senha: ''
  };

  mensagem: string = ''; 

  constructor(private clienteService: ClienteService) {}

  fazerLogin() {
    this.clienteService.validarLogin(this.obj.email, this.obj.senha).subscribe(
      (response) => {
        
        localStorage.setItem('cliente', JSON.stringify(response));
        this.mensagem = 'Login bem-sucedido!';
        alert(this.mensagem);
        window.location.href = './cesta'; 
      },
      (error) => {
        this.mensagem = 'Credenciais inválidas. Tente novamente.';
        alert(this.mensagem);
      }
    );
  }
}
