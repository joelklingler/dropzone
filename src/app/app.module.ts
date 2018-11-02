import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManifestModule } from './modules/manifest/manifest.module';
import { JumperComponent } from './modules/jumper/jumper.component';
import { NavigationComponent } from './modules/shared/navigation/navigation.component';
import { MaterialModule } from './modules/shared/material.module';
import { FooterComponent } from './modules/shared/navigation/footer.component';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    JumperComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManifestModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
