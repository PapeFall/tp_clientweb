import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { Interceptor } from './interceptor';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminCategorieComponent } from './components/admin-categorie/admin-categorie.component';
import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCategorieComponent } from './components/admin-categorie/edit-categorie/edit-categorie.component';
import { EditArticleComponent } from './components/admin-article/edit-article/edit-article.component';
import { EditUserComponent } from './components/admin-user/edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewscontentComponent,
    AdminMainComponent,
    AdminCategorieComponent,
    AdminArticleComponent,
    AdminUserComponent,
    EditCategorieComponent,
    EditArticleComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
