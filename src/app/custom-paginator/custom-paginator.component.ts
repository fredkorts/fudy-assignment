import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent {
  @Input()
  pageInfo!: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };

  @Output() pageChange = new EventEmitter<number>();

  nextPage(): void {
    if (this.pageInfo.hasNextPage) {
      this.pageChange.emit(this.pageInfo.page + 1);
    }
  }
  
  previousPage(): void {
    if (this.pageInfo.hasPreviousPage) {
      this.pageChange.emit(this.pageInfo.page - 1);
    }
  }
  
}
