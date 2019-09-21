import { Component, OnInit } from '@angular/core';
import { PuppyApiService } from '../services/puppy-api/puppy-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;
  response;
  spinnerClass = '';
  contentClass = 'hidden';

  searchMode: string;

  searchContainerClass = 'search-container';
  searchOptionsClass = 'search-options';

  constructor(private puppyApiService: PuppyApiService) { }

  ngOnInit() {
    this.searchMode = 'recipes';
    this.searchText = '';
    this.doSearch();
  }

  toggleOptions() {
    this.searchContainerClass = (this.searchContainerClass === 'search-container-opened' ? 'search-container' : 'search-container-opened');
    this.searchOptionsClass = (this.searchOptionsClass === 'search-options' ? 'search-options-opened' : 'search-options');
  }

  async doSearch() {
    this.contentClass = 'hidden';
    this.spinnerClass = '';

    this.response = await this.puppyApiService.getRecipe(this.searchText, this.searchMode);
    this.response = this.response.results;

    this.spinnerClass = 'hidden';
    this.contentClass = '';
  }

}
