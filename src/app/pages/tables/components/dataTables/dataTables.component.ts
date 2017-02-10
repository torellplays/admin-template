import {Component, ViewEncapsulation} from '@angular/core';
import { DataTablesService } from './dataTables.service';
import { LocalDataSource } from '../../../../theme/components/ng2-smart-table';
import {SearchTableComponent} from 'ng2-search-table/ng2-search-table';
import {TextFilterComponent} from 'ng2-search-table/ng2-search-table';

@Component({
  selector: 'simple-tables',
  encapsulation: ViewEncapsulation.None,
  template: require('./dataTables.html'),
  styles: [String(require('../../../../../assets/plugins/datatables/dataTables.bootstrap.css'))]
})
export class DataTables {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="fa fa-plus"></i>',
      createButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil"></i>',
      saveButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'Full name',
        type: 'string'
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      password: {
        title: 'Password',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: DataTablesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
