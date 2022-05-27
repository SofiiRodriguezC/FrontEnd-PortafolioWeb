import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data--db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
   private mailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup() {
    return new FormGroup ({
      nombre: new FormControl ('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.pattern(this.mailPattern) ]),
      mensaje: new FormControl ('', [Validators.required])
    });
  }
  contactForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

 onResetForm() {
   this.contactForm.reset();
 }
 
 onSaveForm() {
   if (this.contactForm.valid) {
   this.dbData.saveMessage(this.contactForm.value);
   this.onResetForm();
   console.log('Válido');
   alert('Mensaje enviado.');
   } else {
     console.log ('No válido');
     alert('No se pudo enviar su mensaje.')
   }
 }
 get nombre() { return this.contactForm.get('nombre'); }
 get mail() { return this.contactForm.get('mail'); }
 get mensaje() { return this.contactForm.get('mensaje'); }
}
