import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage-angular';
import {Article} from "../../interfaces/NewResponse";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localArticles: Article[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    await this.loadArticles();
  }

  get getLocalArticles(): Article[] {
    return this._localArticles;
  }

  async saveRemoveArticle(article: Article) {
    const isSaved = this._localArticles.find(a => a.title === article.title);
    if (isSaved) {
      this._localArticles = this._localArticles.filter(a => a.title !== article.title);
    } else {
      this._localArticles.push(article);
    }
    this._storage?.set('article', this._localArticles);
  }

  async loadArticles() {
    const articles = await this._storage?.get('article');
    this._localArticles = articles || [];
    return this._localArticles;
  }

  articleIsSaved(title: string) {
    return !!this._localArticles.find(a => a.title === title);
  }
}
