import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";


@Component({
    selector: 'events-component',
    standalone: true,
    imports: [RouterModule, TranslateModule],
    templateUrl: './events.component.html'

  })

export class EventsComponent{
    title='events-component';

}