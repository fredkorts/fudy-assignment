import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerFormComponent } from './manager-form.component';

const routes: Routes = [{ path: '', component: ManagerFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerFormRoutingModule { }
