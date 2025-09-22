import { Injectable } from '@angular/core';
import { Client, Databases, Models, Query, TablesDB } from 'appwrite';
import { environment } from '../../../../enviroments/environment';
import { databaseId } from '../../../../lib/appwrite';

@Injectable({
  providedIn: 'root'
})
export class ApartmentBuildingService {
  private client: Client;
  tableId = 'apartmentbuildings';
  databaseId = databaseId;
  tablesDB: TablesDB;

  constructor() {
    this.client = new Client()
      .setEndpoint(environment.appwriteEndpoint)
      .setProject(environment.appwriteProjectId);
    this.tablesDB = new TablesDB(this.client);
  }

   getBuildings() {
    const response = this.tablesDB.listRows({
      databaseId: databaseId,
      tableId: this.tableId,
      queries: [
        Query.limit(2)
      ]
    });

    return response;
  }
}
