import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: FormControl;
  simpleForm: FormGroup;
  finishedForm: any;
  formSubmittedSuccess: boolean = false;

  constructor(private readonly fb: FormBuilder) {
    this.simpleForm = fb.group({
      'userName': [null, Validators.required]
    });
    this.userName = this.simpleForm.controls['userName'] as FormControl;
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.simpleForm.valid) {
      this.finishedForm = this.simpleForm.value;
      this.formSubmittedSuccess = true;
      console.log(this.simpleForm.value);
      console.log(this.simpleForm);
    } else {
      this.formSubmittedSuccess = false;
      console.log('Form is invalid')
    }
  }

}
