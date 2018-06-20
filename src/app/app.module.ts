import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { AuthProvider } from "../providers/auth/auth";
import { AddNoteModalPage } from "../pages/add-note-modal/add-note-modal";
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [MyApp, HomePage, LoginPage, AddNoteModalPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, AddNoteModalPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Camera
  ]
})
export class AppModule {}
