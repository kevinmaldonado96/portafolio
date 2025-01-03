import { Component } from '@angular/core';
import { LanguajeComponent } from '../languaje/languaje.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StorageService } from '../commons/storage.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    LanguajeComponent,
    TranslateModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(
    private storageService: StorageService,
    private translate: TranslateService
  ){}

  ngOnInit(): void {
    const lang = this.storageService.getItem("language")
    this.translate.use(lang ?? 'es')
  }

}
