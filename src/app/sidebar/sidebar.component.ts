import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { StorageService } from '../commons/storage.service';
import { CommonModule } from '@angular/common';
import { LanguagePipe } from '../pipe/language.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LanguagePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  selectedLanguage!: string
  selectedFlag!: string
  opened!: boolean

  flags = new Map<string, string>([
    ['en', 'fi fi-gb'],
    ['es', 'fi fi-co']
  ]);


  constructor(private storageService: StorageService, 
    private translate: TranslateService){
      translate.addLangs(['en', 'es']);

  }

  ngOnInit(){
    this.checkLanguaje()
  }

  onMobileDropdownShown() {
    this.opened = true;
  }

  onMobileDropdownHidden() {
    this.opened = false
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event)
    this.checkScreenSize(event.target.innerWidth);
  }

  private checkScreenSize(width: number) {
    const isMobile = width <= 768; 
    if (isMobile) {
      this.checkLanguaje();
    }
  }

  checkLanguaje(){

    this.opened = false

    let lang = this.storageService.getItem("language")
    const flag = this.storageService.getItem("flag")

    lang ??= navigator.language.split('-')[0];
    this.selectedLanguage = lang ?? 'en'

    this.selectedFlag = flag ?? (this.flags.get(this.selectedLanguage) ?? 'fi fi-gb')

  
    if (!this.translate.getLangs().includes(this.selectedLanguage)){
      this.selectedLanguage = 'en'
    } 
    this.translate.use(this.selectedLanguage)
  }

  changeLanguage(lang: string, flag: string) {
    this.translate.use(lang);
    this.storageService.setItem("language", lang)
    this.storageService.setItem("flag", flag)


    this.selectedLanguage = lang
    this.selectedFlag = flag
  }

  closeNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

}
