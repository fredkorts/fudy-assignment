import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomPaginatorComponent } from './custom-paginator.component';

describe('CustomPaginatorComponent', () => {
    let component: CustomPaginatorComponent;
    let fixture: ComponentFixture<CustomPaginatorComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [CustomPaginatorComponent]
      }).compileComponents();
  
      fixture = TestBed.createComponent(CustomPaginatorComponent);
      component = fixture.componentInstance;

      component.pageInfo = {
          page: 1,
          pageCount: 10,
          itemCount: 400,
          take: 10,
          hasPreviousPage: true,
          hasNextPage: true
      };
  
      fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
  
    it('should emit correct page number on next button click', () => {
        component.pageInfo = {
            page: 1,
            pageCount: 10,
            itemCount: 400,
            take: 10,
            hasPreviousPage: false,
            hasNextPage: true
        };

        spyOn(component.pageChange, 'emit');
        component.gotoPage(component.pageInfo.page + 1);
        expect(component.pageChange.emit).toHaveBeenCalledWith(2);
    });

    it('should emit correct page number on previous button click', () => {
      component.pageInfo = {
          page: 2,
          pageCount: 10,
          itemCount: 400,
          take: 10,
          hasPreviousPage: false,
          hasNextPage: true
      };

      spyOn(component.pageChange, 'emit');
      component.gotoPage(component.pageInfo.page - 1);
      expect(component.pageChange.emit).toHaveBeenCalledWith(1);
  });

    it('should emit selected items per page on dropdown change', () => {
        spyOn(component.itemsPerPageChange, 'emit');
        component.onItemsPerPageChange({ target: { value: '20' } });
        expect(component.itemsPerPageChange.emit).toHaveBeenCalledWith(20);
    });

    it('should disable/enable next button based on hasNextPage', () => {
        component.pageInfo = {
            page: 5,
            pageCount: 10,
            itemCount: 400,
            take: 10,
            hasPreviousPage: true,
            hasNextPage: false
        };
        fixture.detectChanges();

        const nextButton = fixture.debugElement.query(By.css('.next')).nativeElement;
        expect(nextButton.disabled).toBeTrue();

        component.pageInfo.hasNextPage = true;
        fixture.detectChanges();
        expect(nextButton.disabled).toBeFalse();
    });
});
