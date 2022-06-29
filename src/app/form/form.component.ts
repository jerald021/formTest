import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '../models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: Form;
  isSent: boolean = false;

  @ViewChild('formValues')
  formValues! : NgForm;

  constructor() {
    this.form = new Form('', '', '', '', '');
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.isSent);

    // console.log(this.isSent);
    console.log(this.formValues.value);
    // this.isSent = !this.isSent;
    this.isSent = true;
     this.formValues.reset();
     console.log(this.isSent);
  }
}
