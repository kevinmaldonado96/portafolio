import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StorageService } from '../commons/storage.service';
import { LanguagePipe } from '../pipe/language.pipe';

@Component({
  selector: 'app-languaje',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    LanguagePipe
  ],
  templateUrl: './languaje.component.html',
  styleUrl: './languaje.component.css'
})
export class LanguajeComponent {

  selectedLanguage!: string
  selectedFlag!: string
  selectLanguaje!: string
  showed!: Boolean


  ngOnInit(){
    this.checkLanguaje()
  }

  constructor(
    private storageService: StorageService,
    private translate: TranslateService){
      translate.addLangs(['en', 'es']);

  }

  onDropdownShown() {
    this.showed = true;
  }

  onDropdownHidden() {
    this.showed = false;
  }

   @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      console.log(event)
      this.checkScreenSize(event.target.innerWidth);
    }
  
    private checkScreenSize(width: number) {
      const isWeb = width > 768; 
      if (isWeb) {
        this.checkLanguaje();
      }
    }
  
    checkLanguaje(){
      this.showed = false 
      let lang = this.storageService.getItem("language")
      const flag = this.storageService.getItem("flag")

      lang ??= navigator.language.split('-')[0];

      this.selectedLanguage = lang ?? 'en'
      this.selectedFlag = flag ?? 'fi fi-co'
  
      this.translate.use(this.translate.getLangs().includes(this.selectedLanguage) ? this.selectedLanguage : 'en');
    
    }

  changeLanguage(lang: string, flag: string) {
    this.translate.use(lang);
    this.storageService.setItem("language", lang)
    this.storageService.setItem("flag", flag)

    this.selectedLanguage = lang
    this.selectedFlag = flag
  }

}
