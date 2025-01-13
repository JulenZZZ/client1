import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule, RouterOutlet } from "@angular/router";


@Component({
    selector: 'events-component',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './events.component.html'

  })

export class EventsComponent{
    title='events-component';

}