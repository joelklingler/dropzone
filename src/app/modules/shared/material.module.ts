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
  MatExpansionModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop'

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
    MatExpansionModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTooltipModule,
    MatSelectModule,
    DragDropModule
  ],
  declarations: []
})
export class MaterialModule { }
