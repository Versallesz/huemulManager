import { Component, inject, signal } from '@angular/core';
import { InformationCard } from "../../shared/components/information-card/information-card";
import { faHouse, faCoins, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { ApartmentBuildingService } from '../../shared/services/apartment/apartment-building-service';
import { apartmentBuilding } from '../../models/apartment-building.model';
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
  buildingInfo = signal<apartmentBuilding>({
    name: '',
    address: '',
    manager: '',
    totalUnits: 0,
    totalIncome: 0,
    balance: 0,
    units: []
});

  private buildingService = inject(ApartmentBuildingService);

  ngOnInit(): void {
    this.getBuildingInfo();
  }

  getBuildingInfo(){
    this.buildingService.getBuildings().then(response => {
      this.buildingInfo.update(info => ({
        ...info,
        name: response.rows[0]['name'] as string,
        totalUnits: response.rows[0]['totalUnits'] as number
      }));
      console.log(this.buildingInfo());
    })
  }
}
