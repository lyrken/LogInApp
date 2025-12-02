import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-log-in-formulary',
  templateUrl: './log-in-formulary.page.html',
  styleUrls: ['./log-in-formulary.page.scss'],
  standalone: false,
})
export class LogInFormularyPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(formulario: NgForm) {
    if (formulario.invalid) {
      console.log('Formulario inválido');
      return;
    }

    console.log('Formulario enviado');
    console.log('Usuario:', this.usuario);
    console.log('NgForm:', formulario);
  }

}
