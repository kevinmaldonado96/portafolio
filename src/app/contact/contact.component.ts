import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    LanguajeComponent,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
