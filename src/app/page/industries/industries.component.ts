import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [AboutComponent, CardComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

}
