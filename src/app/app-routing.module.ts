import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopWatchModule, StopWatchPage } from 'stopWatch/ui';

const routes: Routes = [
	{path: '',redirectTo: '/stop-watch',pathMatch: 'full'},
	{path: 'stop-watch',component: StopWatchPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),StopWatchModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
