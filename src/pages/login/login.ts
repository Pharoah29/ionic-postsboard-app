import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { User } from "../../models/user.model";
import { NgForm } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public alert: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  logForm(form: NgForm) {
    const current = true; //this.authProvider.findUser(this.user);

    if (current) {
      this.navCtrl.setRoot(HomePage);
    } else
      [
        this.alert
          .create({
            title: "Login",
            message: "Error. Wrong credentials. Please try again",
            buttons: ["Ok"]
          })
          .present()
      ];
  }
}
