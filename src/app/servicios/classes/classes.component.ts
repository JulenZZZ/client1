import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'home-component',
    standalone: true,
    imports: [RouterModule, TranslateModule],
    templateUrl: './classes.component.html'

  })

export class ClassesComponent{
    title='classes-component';

   
}