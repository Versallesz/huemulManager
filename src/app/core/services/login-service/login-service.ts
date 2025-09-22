import { Injectable } from '@angular/core';
import { Client, Account, ID, Databases, Query, Storage, Functions, ExecutionMethod } from "appwrite";
import { environment } from '../../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly client: Client;
  private account: Account;
  private db: Databases;
  private storage: Storage;
  private functions: Functions;

  constructor() {
        this.client = new Client();
        this.client
        .setEndpoint(environment.appwriteEndpoint)
        .setProject(environment.appwriteProjectId);

        this.account = new Account(this.client);
        this.db = new Databases(this.client);
        this.storage = new Storage(this.client);
        this.functions = new Functions(this.client);
    }

  login(email: string, password: string) {
      const promise = this.account.createEmailPasswordSession({email, password});
      return promise;
  }

  logout(){
    return this.account.deleteSession({ sessionId: 'current' });
  }
  getAccount(){
    const result = this.account.get();
    return result;
  }


}
