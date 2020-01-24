import { Injectable } from '@angular/core';

import { Meta } from '@angular/platform-browser';
import { generate } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta:Meta) { }
generateTags(config){
config={
  title: "Gabriel Rodriguez",
  description:"Mi personal pagina web como desarrollador",
  image:"",
  slug:"",
  ...config
}


  this.meta.updateTag({ property: 'og:type', content: 'article' });
  this.meta.updateTag({ property: 'og:site_name', content: 'Gabriel Rodriguez' });
  this.meta.updateTag({ property: 'og:title', content: config.title });
  this.meta.updateTag({ property: 'og:description', content: config.description });
  this.meta.updateTag({ property: 'og:image', content: config.image });
  this.meta.updateTag({ property: 'og:url', content: `http://gabrielrodriguezdev.000webhostapp.com/` });


  }
}
