import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-smart-table-pager',
  styleUrls: ['pager.scss'],
  template: `
    <div class="col-sm-5"> </div>
    <div class="col-sm-7">
      <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
       <ul *ngIf="shouldShow()" class="pagination">
        <li class="paginate_button previous disabled" id="example1_previous"
            [ngClass]="{disabled: getPage() == 1}">
            <a href="#" (click)="getPage() == 1 ? false : paginate(1)"> Previous </a>
        </li>
        <li class="paginate_button" [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link" *ngIf="getPage() == page">{{ page }}
           <span class="sr-only">(current)
           </span>
          </span>
          <a class="ng2-smart-page-link page-link" href="#" (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>
        <li class="ng2-smart-page-item page-item"  [ngClass]="{disabled: getPage() == getLast()}">
          <a href="#" (click)="getPage() == getLast() ? false : paginate(getLast())"> Next</a>
        </li>
      </ul>
      </div>
    </div>
  `
})
export class PagerComponent {

  @Input() perPage: number;
  @Input() source: DataSource;

  @Output() changePage = new EventEmitter<any>();

  protected pages: Array<any>;
  protected page: number;
  protected count: number = 0;

  ngOnInit(): void {
    this.source.onChanged().subscribe((changes) => {
      this.page = this.source.getPaging().page;
      this.count = this.source.count();

      if (this.isPageOutOfBounce()) {
        this.source.setPage(--this.page);
      }

      this.processPageChange(changes);
      this.initPages();
    });
  }

  /**
   * We change the page here depending on the action performed against data source
   * if a new element was added to the end of the table - then change the page to the last
   * if a new element was added to the beginning of the table - then to the first page
   * @param changes
   */
  processPageChange(changes): void {
    if (changes['action'] === 'prepend') {
      this.source.setPage(1);
    }
    if (changes['action'] === 'append') {
      this.source.setPage(this.getLast());
    }
  }

  shouldShow(): boolean {
    return this.source.count() > this.perPage;
  }

  paginate(page: number): boolean {
    this.source.setPage(page);
    this.page = page;
    this.changePage.emit({ page });
    return false;
  }

  getPage(): number {
    return this.page;
  }

  getPages(): Array<any> {
    return this.pages;
  }

  getLast(): number {
    return Math.ceil(this.count / this.perPage);
  }

  isPageOutOfBounce(): boolean {
    return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
  }

  initPages() {
    let pagesCount = this.getLast();
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this.pages = [];

    if (this.shouldShow()) {

      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this.page >= middleOne ? this.page : middleOne;

      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;

      let firstOne = lastOne - showPagesCount + 1;

      for (let i = firstOne; i <= lastOne; i++) {
        this.pages.push(i);
      }
    }
  }
}
