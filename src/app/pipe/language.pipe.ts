import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from '../commons/storage.service';

const languajeArray: any = {
  es: {
      'es': 'Español',
      'en': 'Ingles'
  },
  en: {
      'es': 'Spanish',
      'en': 'English'
  }
};

@Pipe({
  name: 'language',
  standalone: true
})
export class LanguagePipe implements PipeTransform {

  lang:any

  constructor(private storageService: StorageService) {}

  transform(value: any): string {

    this.lang = (this.storageService.getItem("language")) ? this.storageService.getItem("language") : 'es'
    console.log(this.lang)

    console.log(value)
    const language = this.lang.startsWith('en') ? 'en' : 'es'; 
    return languajeArray[language][`${value}`] || `${value}`;   }

}
