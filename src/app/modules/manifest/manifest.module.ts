import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ManifestComponent } from './manifest.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { QueueComponent } from './modules/queue.component';
import { LoadsComponent } from './modules/loads.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path:'test', component: ManifestComponent}
    ])
  ],
  declarations: [ManifestComponent, NavigationComponent, QueueComponent, LoadsComponent]
})
export class ManifestModule { }
