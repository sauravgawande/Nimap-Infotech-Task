import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-popout',
  templateUrl: './form-popout.component.html',
  styleUrls: ['./form-popout.component.css']
})
export class FormPopoutComponent implements OnInit {
  userData: any;
  editMode: boolean = false;
  userForm!: FormGroup;
  firstName!: string;
  email!: string;
  phone!: string;
  address!: string;
  city!: string;
  state!: string;
  country!: string;
  lastName!: any;
  age!: any;
  skills!: any
  subscribe!: any;
  aggree!: any;
  company1!: any;
  address1!: any;
  address2!: any;
  company2!: any;
  myForm!: FormGroup
  imageUrl!: string;
  maxSize: number = 710;
  errorMessage: string = '';
  selectedOption!: any
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]{1,20}$'),
  ]);
  editModeImage: boolean = false;







  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {}






  ngOnInit(): void {
    this.service.getDataById().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);

      // Set initial form values from API response
      this.firstName = this.userData?.firstName;
      this.skills = this.userData?.skills;
      this.age = this.userData?.age;
      this.subscribe = this.userData?.subscribe;
      this.email = this.userData?.email;
      this.phone = this.userData?.phone;
      this.address = this.userData?.address;
      this.lastName = this.userData?.lastName;
      this.state = this.userData?.state;
      this.country = this.userData?.country;
      this.aggree = this.userData?.aggree;
      this.address1 = this.userData?.address1;
      this.address2 = this.userData?.address2;
      this.company1 = this.userData?.company1;
      this.company2 = this.userData?.company2;
      this.imageUrl = this.userData?.imageUrl1;

    }, error => {
      this.router.navigate(['/']);

    });

  }




  //Form controls
  get formControls() {
    return this.userForm.controls;
  }



  //Toggle edit button for the form
  toggleEditMode() {
    this.editMode = !this.editMode;

  }



  //save changes button for the form
  saveChanges(): void {

    const updatedUserData = {
      id: this.userData?.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      age: this.age,
      state: this.state,
      country: this.country,
      skills: this.skills,
      subscribe: this.subscribe,
      aggree: this.aggree,
      address1: this.address1,
      address2: this.address2,
      company1: this.company1,
      company2: this.company2,
      imageUrl1: this.imageUrl
    };
    

    this.service.updateUserData(this.userData?.id, updatedUserData).subscribe((data: any) => {
      console.log('User data updated successfully', data);
      
      this.service.getDataById().subscribe((res) => {
        this.userData = res;
       
        this.firstName = this.userData?.firstName;
        this.age = this.userData?.age;
        this.subscribe = this.userData?.subscribe;
        this.email = this.userData?.email;
        this.phone = this.userData?.phone;
        this.address = this.userData?.address;
        this.lastName = this.userData?.lastName
        this.state = this.userData?.state;
        this.country = this.userData?.country;
        this.skills = this.userData?.skills;
        this.aggree = this.userData?.aggree;
        this.address1 = this.userData?.address1;
        this.address2 = this.userData?.address2;
        this.company1 = this.userData?.company1;
        this.company2 = this.userData?.company2;
        this.imageUrl = this.userData?.imageUrl1;
      });
    });
    this.editMode = !this.editMode;
  }




  //i agree button method
  aggreeBtn() {
    const updatedUserData = {
      id: this.userData?.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      age: this.age,
      state: this.state,
      country: this.country,
      skills: this.skills,
      subscribe: this.subscribe,
      aggree: true,
      address1: this.address1,
      address2: this.address2,
      company1: this.company1,
      company2: this.company2,
      imageUrl1: this.imageUrl
    }
    this.service.updateUserData(this.userData?.id, updatedUserData).subscribe((res) => {
      console.log(res);

    })

    this.router.navigate(['/'])
  }




//edit image button upload method
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Get the first File object from the FileList
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


//image upload toggle metohod
  toggleEditModeImage() {
    this.editModeImage = !this.editModeImage;

  }



//save edited image 
  saveImage() {
    const updatedUserData = {
      id: this.userData?.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      age: this.age,
      state: this.state,
      country: this.country,
      skills: this.skills,
      subscribe: this.subscribe,
      aggree: false,
      address1: this.address1,
      address2: this.address2,
      company1: this.company1,
      company2: this.company2,
      imageUrl1: this.imageUrl
    }
    this.service.updateUserData(this.userData?.id, updatedUserData).subscribe((res) => {
      console.log(res);

    })
    this.editModeImage = !this.editModeImage;

  }


  

}
