import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


export const routes: Routes = [
    { path: '', redirectTo:'/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: ResumeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'portafolio', component: PortafolioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
  })
  export class AppRoutingModule { }