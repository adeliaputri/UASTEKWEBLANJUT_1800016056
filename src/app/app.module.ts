import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL DESIGN COMPONENT
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TambahDataComponent } from './tambah-data/tambah-data.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDataComponent } from './edit-data/edit-data.component';
import { LoginComponent } from './login/login.component';
import { MaterialDesign} from './material/material';

@NgModule({
  declarations: [
    AppComponent,
    TambahDataComponent,
    DetailDataComponent,
    DialogKonfirmasiComponent,
    EditDataComponent,
    LoginComponent
    
  ],

  entryComponents:[
    TambahDataComponent,
    DetailDataComponent, 
    DialogKonfirmasiComponent, 
    EditDataComponent

  ],
  
  imports: [
     BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  HttpClientModule,
  FormsModule,
  MaterialDesign
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
