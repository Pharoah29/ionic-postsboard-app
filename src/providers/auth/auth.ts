import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private users: User[] = [{ userName: "admin", password: "admin" }];

  constructor(public http: HttpClient) {}

  findUser(user: User) {
    return this.users.find(
      u => u.userName == user.userName && u.password == user.password
    );
  }
}
