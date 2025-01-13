import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { initFlowbite } from 'flowbite';
import { Tooltip, initTWE, Carousel } from 'tw-elements';
import { NavbarComponent } from './navbar/navbar.component';
import {  FooterComponent } from "./footer/footer.component";

import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, TranslateModule, NavbarComponent, RouterModule,  FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-project';

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('pl');
    this.translateService.use(localStorage.getItem('lang') || 'pl');
  }

  ngOnInit(): void {
    initFlowbite();
    initTWE({ Tooltip });
    initTWE({ Carousel });
  }
}
