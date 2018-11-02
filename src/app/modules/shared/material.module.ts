import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatIconModule, 
  MatGridListModule, 
  MatCardModule, 
  MatListModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
