import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'home-component',
    standalone: true,
    imports: [RouterModule, TranslateModule],
    templateUrl: './home.component.html'

  })

export class HomeComponent{
    title='home-component';

    constructor(private translateService: TranslateService){
        this.translateService.setDefaultLang('pl');
        this.translateService.use(localStorage.getItem('lang') || 'pl');
      }
}