import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {ErrorComponent} from "../error/error.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: // Si on détecte des routes enfants, on doit afficher leur contenu
      [
        {
          path: 'article', loadChildren: () => import('./article/article.module') // On pointe vers le module.
            .then(m => m.ArticleModule) // On active le module.
        },
        {
          path: 'depot', loadChildren: () => import('./depot/depot.module') // On pointe vers le module.
            .then(m => m.DepotModule) // On active le module.
        },
        {
          path:'**', component:ErrorComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
