import { Component, Input } from '@angular/core';
import { WikiService } from './wiki/wiki.service';
import { SearchHistoryService } from './search-history/search-history.service';
import { GiphyService } from './giphy/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki-giphy-app';
  @Input() searchText: string;
  wikiResults: any[];
  giphyResults: string;

  constructor(private wikiService: WikiService, private searchHistoryService: SearchHistoryService, private giphyService: GiphyService) { 
    this.wikiResults = [];
    this.giphyResults = "";
  }

  searchWikiGiphy() {
    this.wikiService.searchWiki(this.searchText).subscribe((response: any) => {
      this.wikiResults = response.query.search;
    });
    this.giphyService.searchGiphy(this.searchText).subscribe((response: any) => {
      var data = response.data;
      if (data.length > 0) {
        var gif = Math.floor(Math.random() * Math.floor(data.length));
        this.giphyResults = data[gif].images.downsized.url;
      }
      else {
        alert("No gif found :(");
      }
    });
    this.searchHistoryService.addSearch(this.searchText, Date.now());
  }
}