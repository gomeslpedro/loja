import { Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { BuscaComponent } from './busca/busca.component';


export const routes: Routes = [
    { path: "detalhes", component: DetalhesComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "vitrine", component: VitrineComponent },
    { path: "", component: VitrineComponent },
    { path: "cesta", component: CestaComponent},
    { path: "esqueciSenha", component: EsqueciSenhaComponent},
    { path: "login", component: LoginComponent},
    { path: "busca", component: BuscaComponent}
];
