import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

// ----Agregamos las rutas de los componentes ------------------------------------------------
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { ShowPeopleComponent } from './components/show-people/show-people.component';
// -------------------------------------------------------------------------------------------


//-------------------Rutas para redireccionar------------------------
const routes: Routes = [
{ path: '',pathMatch:'full', redirectTo:'show-people'},
{ path: 'add-person', component: AddPersonComponent},
{ path: 'edit-person', component: EditPersonComponent},
{ path: 'show-people', component: ShowPeopleComponent}
];
//--------------------------------------------------------------------
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
