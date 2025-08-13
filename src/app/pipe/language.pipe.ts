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

    this.lang = (this.storageService.getItem("language")) ? this.storageService.getItem("language") : navigator.language.split('-')[0]

    const language = this.lang.startsWith('es') ? 'es' : 'en'; 
    return languajeArray[language][`${value}`] || `${value}`;   }

}
