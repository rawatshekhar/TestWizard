import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  dataForm: any;

  constructor(    private fb: FormBuilder,) {
    this.dataForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postcode: ['',[Validators.required,
        Validators.pattern("^[0-9]*$")]],
      street: [, [Validators.required]],
      email: [, [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

}
