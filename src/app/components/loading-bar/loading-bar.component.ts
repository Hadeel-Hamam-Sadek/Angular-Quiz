import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css'],
})
export class LoadingBarComponent implements OnInit {
  showLoader = false;
  loaderService = inject(LoadingService);
  cdRef = inject(ChangeDetectorRef);
  constructor() {}
  ngOnInit(): void {
    this.init();
  }
  init() {
    this.loaderService.getLoaderObserver().subscribe((status) => {
      this.showLoader = status === 'start';
    });
  }
}
