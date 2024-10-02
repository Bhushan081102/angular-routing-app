import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BatchListComponent } from './batch-list/batch-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'batches', component: BatchListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
