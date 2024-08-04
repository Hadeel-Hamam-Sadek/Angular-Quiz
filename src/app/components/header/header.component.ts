import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private searchService: SearchService) {}

  onSearchInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const userId = parseInt(input.value, 10);
    if (input.value === '') {
      this.searchService.updateSearchUserId(null);
    } else if (!isNaN(userId)) {
      this.searchService.updateSearchUserId(userId);
    }
  }
}
