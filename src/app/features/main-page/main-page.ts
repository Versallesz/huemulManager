import { Component } from '@angular/core';
import { InformationCard } from "../../shared/components/information-card/information-card";
import { faHouse, faCoins, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-page',
  imports: [InformationCard],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  faHouse = faHouse;
  faCoins = faCoins;
  faMagnifyingGlassChart = faMagnifyingGlassChart;
}
