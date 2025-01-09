import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguajeComponent } from '../languaje/languaje.component';
import { StorageService } from '../commons/storage.service';

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
constructor(
    private storageService: StorageService,
    private translate: TranslateService
  ){}

  ngOnInit(): void {
    const lang = this.storageService.getItem("language")
    this.translate.use(lang ?? 'es')
  }
}
