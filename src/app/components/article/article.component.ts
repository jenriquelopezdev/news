import {Component, Input} from '@angular/core';
import {ActionSheetController, Platform} from "@ionic/angular";

import {InAppBrowser} from "@awesome-cordova-plugins/in-app-browser/ngx";
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';

import {Article} from "../../interfaces/NewResponse";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article = {} as Article;
  @Input() index: number = 0;

  constructor(
    private inappBrowser: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private storageService: StorageService
  ) {
  }

  openArticle() {
    if (this.article.url != null) {
      this.inappBrowser.create(this.article.url);
    }
  }

  async openMenu() {
    const actionButtons = [
      {
        text: this.storageService.articleIsSaved(this.article.title) ? 'Remove from favorites' : 'Add to favorites',
        icon: this.storageService.articleIsSaved(this.article.title) ? 'trash-outline' : 'star-outline',
        handler: () => this.onToggleFavorite()
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
      }
    ];

    const actionButton = {
      text: 'Share',
      icon: 'share-outline',
      handler: () => this.onShareArticle()
    }

    if (this.platform.is('capacitor')) {
      actionButtons.unshift(actionButton);
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: actionButtons
    });

    await actionSheet.present();
  }

  onShareArticle() {
    if (this.article.url != null) {
      this.socialSharing.share(
        this.article.title,
        this.article.source.name,
        '',
        this.article.url
      );
    }
  }

  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.article);
  }
}
