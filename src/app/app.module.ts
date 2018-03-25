import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlusComponent } from './components/plus/plus.component';
import { BlockComponent } from './components/plus/components/block/block.component';
import { Helper } from './services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    PlusComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Helper],
  bootstrap: [AppComponent]
})
export class AppModule { }
