import { Component } from '@angular/core';
import {
  SzEntitySearchParams,
  SzAttributeSearchResult
} from '@senzing/sdk-components-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'senzing-sdk-consumer';
  public currentSearchResults: SzAttributeSearchResult[];
  public currentlySelectedEntityId: number;
  public currentSearchParameters: SzEntitySearchParams;

  onSearchResults(evt: SzAttributeSearchResult[]) {
    console.log('@senzing/sz-search-results: ', evt);
    // store on current scope
    this.currentSearchResults = evt;
    // results module is bound to this property
  }

  public onSearchResultClick(entityData: SzAttributeSearchResult) {
    console.log('@senzing/sz-search-results-click: ', entityData);

    if (entityData && entityData.entityId > 0) {
      this.currentlySelectedEntityId = entityData.entityId;
    }
  }
}
