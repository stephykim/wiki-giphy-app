import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from './search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searchHistory: any[];
  constructor(private historyService: SearchHistoryService) { 
    this.searchHistory = [];
  }

  getHistory() {
    this.searchHistory = this.historyService.searchHistory;
  }

  ngOnInit() {
    this.getHistory();
  }
}
