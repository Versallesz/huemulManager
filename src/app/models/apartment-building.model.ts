import { Apartment } from "./apartment.model";

export interface apartmentBuilding {
  name: string;
  address: string;
  totalUnits: number;
  manager?: string;
  totalIncome: number;
  balance: number;
  units: Apartment[];
}
