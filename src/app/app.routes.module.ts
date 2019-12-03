import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MainAppRoutingModule {}
