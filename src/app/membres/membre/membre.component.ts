import { Component,OnInit } from '@angular/core';
import { MembresService } from '../../services/membres.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit{
  membres: any
  constructor(private membreService:MembresService) {}
  
  ngOnInit(): void {
    this.membreService.getMembres().subscribe((response) => {
       console.log(response);
        this.membres = response;
    })
  }
}
