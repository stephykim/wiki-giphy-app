import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey: string;
  private baseUrl: string;

  constructor(public httpClient: HttpClient) { 
    this.apiKey = environment.giphyConfig.apiKey;
    this.baseUrl = environment.giphyConfig.baseUrl;
  }

  searchGiphy(searchText: string): Observable<any> {
    var url = `${this.baseUrl}` +
                `?api_key=${this.apiKey}` +
                `&q=${searchText}` +
                `&limit=5&offset=0&rating=G&lang=en`;
    return this.httpClient.get(url);
  }
}
