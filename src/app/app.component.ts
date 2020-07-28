import { Component } from '@angular/core';
 //import modul dialog
 import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 //import halaman dialog yang sudah dibuat pada tahap sebelumnya
import {TambahDataComponent} from './tambah-data/tambah-data.component';
import {DetailDataComponent} from './detail-data/detail-data.component';
import {DialogKonfirmasiComponent} from './dialog-konfirmasi/dialog-konfirmasi.component';
import {ApiService} from './api.service';
import { EditDataComponent } from './edit-data/edit-data.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  public dialog:MatDialog, //menambahkan variabel dialog
  public api:ApiService
  )
  {
    this.getData();
  }
  dataAlamat:any=[];
  getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataAlamat=res;
    })
  }
  
  //fungsi untuk menampilkan dialog penambahan alamat baru
  buatData()
  {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data:null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }
    
  detailData(item)
  {
    const dialogRef = this.dialog.open(DetailDataComponent, {
      width: '450px',
      data:item // tambahan kode
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');     
    });
  }

  konfirmasiHapus(id)
  {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: '450px',      
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true)
      {
        console.log('Menghapus data');
        this.api.hapus(id).subscribe(res=>{
          this.getData();
        })
      }   
    });
  }

    editData(data)
    {
      const dialogRef = this.dialog.open(EditDataComponent, {
        width: '450px',
        data:data
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getData();    
      });
    } 
    
}