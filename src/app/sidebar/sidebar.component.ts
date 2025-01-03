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

  constructor(private storageService: StorageService, 
    private translate: TranslateService){
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

    const lang = this.storageService.getItem("language")
    const flag = this.storageService.getItem("flag")

    this.selectedLanguage = lang ?? 'es'
    this.selectedFlag = flag ?? 'fi fi-co'

    this.translate.use(this.selectedLanguage)
  }

  changeLanguage(lang: string, flag: string) {
    console.log(lang)
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
