import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './menu/main/main.component';
import { JobComponent } from './components/job/job.component';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JobComponent,
    RemoveUnderscorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
