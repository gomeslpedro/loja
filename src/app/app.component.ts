import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroComponent, DetalhesComponent, MenuComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'loja';
}
