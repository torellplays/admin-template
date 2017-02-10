import { Injectable } from '@angular/core';

@Injectable()
export class User {
  public id: number;
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
    constructor(id: number, email:string, password:string, firstName:string, lastName:string){
      this.id = id;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
    }
}
