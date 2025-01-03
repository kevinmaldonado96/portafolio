import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    TranslateModule,
    LanguajeComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
