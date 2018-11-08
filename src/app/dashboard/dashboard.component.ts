import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../wiki/wiki.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() searchText: string;
  wikiResults: string;
  giphyResults: string;

  constructor(private wikiService: WikiService) { 
    this.wikiResults = "";
    this.giphyResults = "";
  }

  searchWikiGiphy(searchText: string) {
    this.wikiService.searchWiki(searchText).subscribe((response: any) => {
      this.wikiResults = response.query.search;
      console.log(response.query.search);
    });
  }

  ngOnInit() {
  }

}
