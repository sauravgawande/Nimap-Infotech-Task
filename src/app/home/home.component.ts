import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterFormComponent } from '../register-form/register-form.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedOption!: any
  jobType!: any
  myForm!: FormGroup;







  constructor(private dialog: MatDialog, private fb: FormBuilder) { }
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
    });
  }


  //navigation components lists
  list = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/preview",
      name: "About-Us"
    },
    {
      path: "/",
      name: "Jobs"
    },
    {
      path: "/",
      name: "Clients"
    },
    {
      path: "/",
      name: "Employees"
    },
    {
      path: "/",
      name: "Contact-Us"
    },
  ]



  //search bar method
  searchHandler() {
    console.log(this.selectedOption);
    console.log(this.jobType);

  }



  //Register button open form method
  openDialog() {
    this.dialog.open(RegisterFormComponent, {
      width: "700px",
      height: '600px'
    })
  }




}
