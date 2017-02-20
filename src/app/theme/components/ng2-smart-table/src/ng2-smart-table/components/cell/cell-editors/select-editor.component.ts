import { Component, Input } from '@angular/core';

import { DefaultEditor } from './default-editor';
import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'select-editor',
  template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
})
export class SelectEditorComponent extends DefaultEditor {
  @Input() cell: Cell;
  @Input() inputClass: string = '';


  constructor() {
    super();
  }
}
