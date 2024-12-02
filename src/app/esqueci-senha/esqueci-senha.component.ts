import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {
  email: string = '';
  mensagem: string = '';

  constructor(private http: HttpClient) {}

  reenviarSenha() {
    if (this.email) {
      this.http
        .post('http://localhost:8090/api/clientes/esqueci-senha', { email: this.email }, { responseType: 'text' })
        .subscribe({
          next: (res) => {
            this.mensagem = 'E-mail enviado com sucesso! Verifique sua caixa de entrada.';
          },
          error: (err) => {
            this.mensagem = 'Erro ao enviar e-mail. Verifique se o e-mail está correto.';
          },
        });
    } else {
      this.mensagem = 'Por favor, insira um e-mail válido.';
    }
  }
}
