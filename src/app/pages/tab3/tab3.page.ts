import {Component} from '@angular/core';
import {Article} from "../../interfaces/NewResponse";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  get articles(): Article[] {
    return this.storage.getLocalArticles;
  }

  constructor(private storage: StorageService) {

  }
}
