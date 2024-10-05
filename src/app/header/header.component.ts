import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  public filtro: string="";
  
  constructor(
    private router: Router,
    private sharedService: SharedService
  ) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToVitrine() {
    this.router.navigate(['/vitrine']);
  }
  navigateToBusca(){
    this.router.navigate(['./busca'])
  }

  onSearchChange(event: any) {
    const inputValue = event.target.value;
    this.sharedService.changeSearchTerm(inputValue);  
  }
}
