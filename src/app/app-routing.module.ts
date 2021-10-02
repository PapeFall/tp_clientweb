import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { AdminCategorieComponent } from './components/admin-categorie/admin-categorie.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';

const routes: Routes = [
  {
    path:"accueil",
    component: NewscontentComponent
  },
  {
    path:"categorie/:categorie",
    component: NewscontentComponent
  },{
    path:"detail/:article",
    component:NewscontentComponent
  },{
    path:"admin",
    component: AdminMainComponent,
    children:[
      {
        path:"user",
        component:AdminUserComponent
      },
      {
        path:"categorie",
        component:AdminCategorieComponent
      },
      {
        path:"article",
        component:AdminArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
