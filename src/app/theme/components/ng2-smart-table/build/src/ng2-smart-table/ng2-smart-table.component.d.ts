import { SimpleChange, EventEmitter, OnChanges } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { TitleComponent } from './components/title/title.component';
export declare class Ng2SmartTableComponent implements OnChanges {
    source: any;
    settings: Object;
    rowSelect: EventEmitter<any>;
    userRowSelect: EventEmitter<any>;
    delete: EventEmitter<any>;
    edit: EventEmitter<any>;
    create: EventEmitter<any>;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    createConfirm: EventEmitter<any>;
    TitleComponent: TitleComponent;
    protected currentDirection: string;
    protected grid: Grid;
    protected defaultSettings: Object;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    onAdd(event: any): boolean;
    onUserSelectRow(row: Row): void;
    onSelectRow(row: Row): void;
    onEdit(row: Row, event: any): boolean;
    onDelete(row: Row, event: any): boolean;
    onCreate(row: Row, event: any): boolean;
    onSave(row: Row, event: any): boolean;
    protected initGrid(): void;
    protected prepareSource(): DataSource;
    protected prepareSettings(): Object;
}
