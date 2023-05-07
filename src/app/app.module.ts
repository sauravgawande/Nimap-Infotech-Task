import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPopoutComponent } from './form-popout/form-popout.component';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatDialogModule} from '@angular/material/dialog'
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule  } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormPopoutComponent,
    HomeComponent,
   
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatChipsModule,
    ReactiveFormsModule,   
     HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
