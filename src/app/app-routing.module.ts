import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManifestComponent } from './modules/manifest/manifest.component';

const routes: Routes = [
  { path:'', component: ManifestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
