import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private httpClient: HttpClient) { }

  searchWiki(searchText: string) {
    var url = "https://en.wikipedia.org/w/api.php" +
        "?action=query&format=json&list=search&origin=*" +
        `&srsearch=${searchText}`;

    let header = {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    };

    // add to search history
    return this.httpClient.get(url, header);
  }
}
