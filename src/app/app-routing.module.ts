import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TabsComponent } from './tabs/tabs.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'project/:id', component: TabsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
