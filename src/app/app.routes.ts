import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: '', redirectTo:'/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: ResumeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skills', component: SkillsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }