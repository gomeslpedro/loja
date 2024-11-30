import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  mensagem: String = "";
  obj: Cliente = new Cliente();

  constructor(private service: ClienteService){}
  gravar(form: any) {
    if (form.invalid) {
      this.mensagem = "Por favor, preencha todos os campos obrigatórios corretamente.";
      alert(this.mensagem);
      return;
    }
    this.service.inserir(this.obj).subscribe(
      (response) => {
        this.mensagem = 'Cadastro realizado com sucesso!';
        console.log('Resposta do servidor:', response); 
        alert(this.mensagem);
      },
      (error) => {
        console.error('Erro na requisição:', error); 
        this.mensagem = `Erro ao cadastrar: ${error.error.message || error.message}`;
        alert(this.mensagem);
      }
    );
  }
  alterar(){
      this.service.alterar(this.obj).subscribe({
          next:(data)=>{this.mensagem="registrado alterado com sucesso!"},
          error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
     });
  }
  remover(){
    this.service.remover(this.obj.codigo as number).subscribe({
      next:(data)=>{this.mensagem="registrado removido com sucesso!"},
      error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
     });
  }
  pesquisar(){
      this.service.pesquisar(this.obj.codigo as number).subscribe({
        next:(data)=>{
            if(data==null){
              this.mensagem = "registro não encontrado!";
            } else {
              this.obj = data;
              this.mensagem = "";
            }
        },
        error:(err)=>{this.mensagem="ocorreu um problema tente mais tarde!;"}
      });

  }
  
  public logout(){
    localStorage.removeItem("cliente");
    window.location.href="./login";
  }
}

