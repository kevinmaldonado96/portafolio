import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';
import { StorageService } from '../commons/storage.service';

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

 constructor(
    private storageService: StorageService,
    private translate: TranslateService
  ){}

  ngOnInit(): void {
    const lang = this.storageService.getItem("language")
    this.translate.use(lang ?? 'es')
  }

}
