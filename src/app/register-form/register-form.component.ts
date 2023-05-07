import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  myForm!: FormGroup
  imageUrl!: string;
  maxSize: number = 350;
  errorMessage: string = '';
  selectedOption!: any
  skills: string[] = [];
  newSkill: string = '';
  subscribe: any
  
  constructor(private fb: FormBuilder,
    private service:ServiceService,
    private router: Router,
    private dialogRef: MatDialogRef<RegisterFormComponent>
    ){}
 


  ngOnInit() {
    this.myForm = this.fb.group({
      imageUrl1: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      state: ['', Validators.required],
      country:['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone:['', Validators.required],
      address1: [''],
      address2: [''],
      company1: [''],
      company2: ['']

    });
    
  }


  firstName = new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(20)]);



  //Submit method
  submit(subscribe: any) {
    const uuid = uuidv4();
    const data = {
      id: uuid,
      imageUrl1: this.imageUrl ? this.imageUrl : '',
      firstName: this.firstName.value,
      lastName: this.myForm.value.lastName,
      age: this.myForm.value.age,
      state: this.myForm.value.state,
      country: this.myForm.value.country,
      email: this.myForm.value.email,
      address: this.myForm.value.address,
      phone: this.myForm.value.phone,
      address1: this.myForm.value.address1,
      address2: this.myForm.value.address2,
      company1: this.myForm.value.company1,
      company2: this.myForm.value.company2,
      skills: this.skills,
      subscribe: subscribe,
      aggree: false
    }

    this.service.postData(data.id, data).subscribe((res) => {


      this.dialogRef.close();
      this.router.navigate(['/preview'])

    }, err => {
      console.log(err);

    })
    this.myForm.reset();


  }
 
  //upload image method
onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result as string;
      const img = new Image();
      img.onload = () => {
        if (img.width <= this.maxSize && img.height <= this.maxSize) {
          this.imageUrl = dataURL;
          
          this.errorMessage = '';
        } else {
          this.errorMessage = `Image must be ${this.maxSize}x${this.maxSize} pixels or smaller.`;
        }
      };
      img.src = dataURL;
    };
    reader.readAsDataURL(file);
  }
}



//age select method
formatLabel(value: number) {
  return `${value}`;
}

//add skills method
addSkill() {
  if (this.newSkill.trim()) {
    this.skills.push(this.newSkill.trim());
    this.newSkill = '';
  }
}




//remove skillss method
removeSkill(skill: string) {
  this.skills = this.skills.filter(s => s !== skill);
}

}
