import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TranslateModule,
    LanguajeComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
