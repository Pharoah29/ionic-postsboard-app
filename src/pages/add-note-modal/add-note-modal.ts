import { Component  } from "@angular/core";
import {
  IonicPage,
  NavController,
  ViewController,
  NavParams,
  Platform
} from "ionic-angular";
import { Note } from "../../models/note.model";
import { NgForm } from "@angular/forms";
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddNoteModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-note-modal",
  templateUrl: "add-note-modal.html"
})
export class AddNoteModalPage {
  note: Note = { author: "", description: "" } as Note;

  isMobile: boolean;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    private platform: Platform
  ) {

   
    this.isMobile = this.platform.is("ios") || this.platform.is("android");
  }

  ionViewDidLoad() {}

  logForm(form: NgForm) {
    this.viewCtrl.dismiss(this.note);
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

  onCameraClick(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.note.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
