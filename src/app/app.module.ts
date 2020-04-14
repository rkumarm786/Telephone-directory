import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DirectoryViewComponent } from './directory-view/directory-view.component';
import { DirectoryChildViewComponent } from './directory-child-view/directory-child-view.component';
import { FilterDirectory } from './service/filter-directory.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryViewComponent,
    DirectoryChildViewComponent,
    FilterDirectory
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
