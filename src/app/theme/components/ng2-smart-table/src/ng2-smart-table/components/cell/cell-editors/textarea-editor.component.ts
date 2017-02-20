import { Component, Input} from '@angular/core';

import { DefaultEditor } from './default-editor';
import { Cell } from '../../../lib/data-set/cell';


@Component({
  selector: 'textarea-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
})
export class TextareaEditorComponent extends DefaultEditor {
  @Input() cell: Cell;
  @Input() inputClass: string = '';
  constructor() {
    super();
  }
}
