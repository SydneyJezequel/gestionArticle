import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout/layout.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
        {
          path: '', loadChildren: () => import('./layout/layout.module') // On pointe vers le module.
            .then(m => m.LayoutModule) // On active le module.
        },
        {
          path:'**', component:ErrorComponent
        }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
