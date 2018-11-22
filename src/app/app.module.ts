import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { GreetingsComponent } from './components/1-greetings/greetings.component';
import { BindingComponent } from './components/2-binding/binding.component';
import { PipeComponent } from './components/3-pipe/pipe.component';
import { FilterPipe } from './components/3-pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    BindingComponent,
    PipeComponent,

    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
