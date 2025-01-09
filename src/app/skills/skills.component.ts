import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';
import { StorageService } from '../commons/storage.service';

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

 constructor(
    private storageService: StorageService,
    private translate: TranslateService
  ){}

  ngOnInit(): void {
    const lang = this.storageService.getItem("language")
    this.translate.use(lang ?? 'es')
  }
}
