import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaWorldComponent } from './corona-world/corona-world.component';
import { CoronaVietnamComponent } from './corona-vietnam/corona-vietnam.component';


const routes: Routes = [
  { path: '', redirectTo: 'corona-world', pathMatch: 'full' },
  { path: 'corona-world', component: CoronaWorldComponent },
  { path: 'corona-vietnam', component: CoronaVietnamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
