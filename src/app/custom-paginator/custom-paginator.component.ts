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
  @Output() itemsPerPageChange = new EventEmitter<number>();

  get pageNumbers(): number[] {
    const { page, pageCount } = this.pageInfo;
  
    if (pageCount <= 6) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
  
    if (page <= 6) {
      return Array.from({ length: 6 }, (_, i) => i + 1);
    }
  
    if (page >= pageCount - 5) {
      return Array.from({ length: 6 }, (_, i) => pageCount - 6 + i + 1);
    }
  
    return [1, 2, 3, page - 1, page, page + 1, pageCount - 2, pageCount - 1, pageCount];
  }
   

  gotoPage(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }  

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

  goToFirstPage(): void {
    this.pageChange.emit(1);
  }
  
  goToLastPage(): void {
    this.pageChange.emit(this.pageInfo.pageCount);
  }  

  onItemsPerPageChange(event: any): void {
    const selectedValue = Number(event.target.value);
    this.itemsPerPageChange.emit(selectedValue);
  }
  
}
