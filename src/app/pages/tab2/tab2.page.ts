import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsService} from "../../services/news/news.service";
import {Article} from "../../interfaces/NewResponse";
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = this.categories[2];
  public articles: Article[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    // this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
    //   this.articles = [...articles]
    // });
  }

  segmentChanged(event: any) {
    this.selectedCategory = event.detail.value;
    this.articles = [];
    // this.newsService.getTopHeadlinesByCategory(this.selectedCategory).subscribe(articles => {
    //   this.articles = [...articles]
    // });
  }

  loadData() {
    // this.newsService.getTopHeadlinesByCategory(this.selectedCategory, true).subscribe(articles => {
    //
    //   //validate if there are more articles
    //   if (articles.length === 0) {
    //     this.infiniteScroll.disabled = true;
    //     this.infiniteScroll.complete();
    //     return;
    //   }
    //
    //   this.articles = [...articles]
    //   this.infiniteScroll.complete();
    // });
  }

}
