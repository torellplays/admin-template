import { Component, Input } from '@angular/core';

import { DefaultEditor } from './default-editor';
import { Cell } from '../../../lib/data-set/cell';


@Component({
  selector: 'input-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
})
export class InputEditorComponent extends DefaultEditor {
  @Input() cell: Cell;
  @Input() inputClass: string = '';
  constructor() {
    super();
  }
}
