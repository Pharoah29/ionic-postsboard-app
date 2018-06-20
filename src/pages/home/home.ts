import { Component } from "@angular/core";
import { NavController, ModalController, NavParams } from "ionic-angular";
import { AddNoteModalPage } from "../add-note-modal/add-note-modal";
import { Note } from "../../models/note.model";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  notes: Note[] = [];

  constructor(
    public navCtrl: NavController,
    public modalWin: ModalController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {}

  addNote() {
    const modal = this.modalWin.create(AddNoteModalPage, null, {
      enableBackdropDismiss: false
    });

    modal.present();

    modal.onDidDismiss((data: any, role: string) => {
      if (data) {
        this.notes.unshift(data);
      }
    });
  }
}
