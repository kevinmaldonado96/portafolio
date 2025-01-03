import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';
import { StorageService } from '../commons/storage.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    TranslateModule,
    LanguajeComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

constructor(
    private storageService: StorageService,
    private translate: TranslateService
  ){}

  ngOnInit(): void {
    const lang = this.storageService.getItem("language")
    this.translate.use(lang ?? 'es')
  }
}
