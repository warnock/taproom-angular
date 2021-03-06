import { NgModule }      from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component'
import { EditKegComponent } from './edit-keg.component';
import { AlcoholContentPipe } from './alcohol-content.pipe'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  NewKegComponent,
                  EditKegComponent,
                  AlcoholContentPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
