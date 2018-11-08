import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  searchHistory: any[];

  constructor() { 
    this.searchHistory = [];
  }

  addSearch(newSearch: string, date: number) {
    console.log(newSearch + " " + date);
    this.searchHistory.push({newSearch, date});
  }
}
