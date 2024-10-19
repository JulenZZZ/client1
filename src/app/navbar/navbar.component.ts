import { Component, OnInit } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'navbar-component',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './navbar.component.html'

  })

  export class NavbarComponent implements OnInit {

    lang:string = '';

    constructor(private translateService:TranslateService){
        
    }

    ngOnInit(): void {
        this.lang = localStorage.getItem('lang') || 'pl';
    }

    ChangeLang(lang:any){
        const selectedLanguage = lang.target.value;

        localStorage.setItem('lang', selectedLanguage);

        this.translateService.use(selectedLanguage);
    }
  }