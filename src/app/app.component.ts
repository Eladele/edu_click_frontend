import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterComponent } from "./templates/master/master.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edu-klick-front-end';
}
