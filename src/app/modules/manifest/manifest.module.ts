import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ManifestComponent } from './manifest.component';
import { RouterModule } from '@angular/router';
import { QueueComponent } from './modules/queue.component';
import { LoadsComponent } from './modules/loads.component';
import { JumperComponent } from '../jumper/jumper.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path:'sdl', component: ManifestComponent },
      { path:'jumper', component: JumperComponent }
    ])
  ],
  declarations: [ManifestComponent, QueueComponent, LoadsComponent]
})
export class ManifestModule { }
