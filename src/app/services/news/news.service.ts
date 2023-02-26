import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Article, ArticlesBtCategoryPage, NewResponse} from "../../interfaces/NewResponse";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private articlesByCategoryPage: ArticlesBtCategoryPage = {};

  constructor(private http: HttpClient) {
  }

  private executeQuery<T>(endpoint: string) {
    return this.http.get<T>(`${apiUrl}/${endpoint}`, {
      params: {
        apiKey,
        country: 'us'
      }
    });
  }

  getTopHeadlines(): Observable<Article[]> {
    return this.gerArticlesByCategory('business');
  }

  getTopHeadlinesByCategory(category: string, loadMore: boolean = false): Observable<Article[]> {
    if (loadMore) {
      return this.gerArticlesByCategory(category);
    }

    if (this.articlesByCategoryPage[category]) {
      return of(this.articlesByCategoryPage[category].articles);
    }

    return this.gerArticlesByCategory(category);
  }

  private gerArticlesByCategory(category: string): Observable<Article[]> {
    if (!Object.keys(this.articlesByCategoryPage).includes(category)) {
      this.articlesByCategoryPage[category] = {
        page: 0,
        articles: []
      };
    }

    const page = this.articlesByCategoryPage[category].page + 1;

    return this.executeQuery<NewResponse>(`top-headlines?category=${category}&page=${page}`).pipe(
      map(({articles}) => {

        if (articles.length === 0) return this.articlesByCategoryPage[category].articles;

        this.articlesByCategoryPage[category] = {
          page: page,
          articles: [...this.articlesByCategoryPage[category].articles, ...articles]
        };

        return this.articlesByCategoryPage[category].articles;
      })
    )
  }
}
