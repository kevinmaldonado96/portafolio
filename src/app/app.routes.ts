import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo:'/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }