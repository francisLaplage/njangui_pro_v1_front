import { Component } from '@angular/core';
import {NgForm,FormGroup,FormControl} from '@angular/forms'
import { MembresService } from '../../services/membres.service';

@Component({
  selector: 'app-add-membre',
  templateUrl: './add-membre.component.html',
  styleUrls: ['./add-membre.component.css']
})
export class AddMembreComponent {

  constructor(private membresService: MembresService) { }
  
  membreForm: FormGroup = new FormGroup({
    num_membre: new FormControl('0'),
    nom_membre: new FormControl(''),
    prenom_membre: new FormControl(''),
    adresse_membre: new FormControl(''),
    tel_membre: new FormControl(''),
    image_membre: new FormControl(''),
    nom_pere_membre: new FormControl(''),
    nom_mere_membre: new FormControl(''),
    date_inscription_membre: new FormControl(''),
    status_membre: new FormControl('0'),
    email: new FormControl(''),
    password: new FormControl(''),
    fonction_membre : new FormControl('')
  })

  public addMembre() {
   //debugger;
    const obj = this.membreForm.value;
    //console.log(obj)
    console.log("La sauvegarde est encours")
    this.membresService.addMembre(obj).subscribe(response => {
      console.log("la sauvegarde est faite !!!!!!")
      console.log(response)
    })
  }
}
