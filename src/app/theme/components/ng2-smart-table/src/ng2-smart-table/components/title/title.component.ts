import { Component, Input, Output, EventEmitter, Injectable, OnInit } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';


@Component({
  selector: 'ng2-smart-table-title',
  styleUrls: ['title.scss'],
  template: `
    <a
      *ngIf="column.isSortable"
      (click)="_sort($event, column)"
      class=""
      [ngClass]="((currentDirection) ? 'sorting_' + currentDirection : 'sorting')">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `
})
export class TitleComponent implements OnInit{

  @Input() column: Column;
  @Input() src: DataSource;

  @Output() sort = new EventEmitter<any>();

  currentDirection = '';

  ngOnInit(): void {
    this.src.onChanged().subscribe((elements) => {
      let sortConf = this.src.getSort();

      if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
        this.currentDirection = sortConf[0]['direction'];
      } else {
        this.currentDirection = '';
      }

      sortConf.forEach((fieldConf) => {

      });
    });
  }

  _sort(): boolean {
    this.changeSortDirection();
    this.src.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection,
        compare: this.column.getCompareFunction()
      }
    ]);
    this.sort.emit(null);
    return false;
  }

  changeSortDirection(): string {
    if (this.currentDirection) {
      let newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
