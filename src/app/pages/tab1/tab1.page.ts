import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsService} from "../../services/news/news.service";
import {Article} from "../../interfaces/NewResponse";
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  articles: Article[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe(articles => this.articles.push(...articles));
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory('business', true).subscribe(articles => {

      //validate if there are more articles
      if (articles.length === 0) {
        this.infiniteScroll.disabled = true;
        this.infiniteScroll.complete();
        return;
      }

      this.articles = [...articles]
      this.infiniteScroll.complete();
    });
  }
}
