import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
	path:'login',
	component:LoginComponent
},
{
		path:'daftar-mahasiswa',
		loadChildren:'./daftar-mahasiswa/daftar-mahasiswa.module#DaftarMahasiswaModule'
	},
{
	path:'',
	redirectTo:'login',
	pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
