import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { CausesComponent } from './causes/causes.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {path: 'symptoms', component:SymptomsComponent},
  {path: 'causes', component:CausesComponent},
  {path: 'treatment', component:TreatmentComponent},
  {path: 'other',component:OtherComponent},
  {path: '**', component:SymptomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SymptomsComponent,CausesComponent,TreatmentComponent,OtherComponent]
