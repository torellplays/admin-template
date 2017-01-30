import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { User } from '../../../../theme/models/index';
import { UserService } from '../../../../theme/services';
import { DataTablesService } from './dataTables.service';
import { LocalDataSource } from '../../../../theme/components/ng2-smart-table';

@Component({
  selector: 'simple-tables',
  encapsulation: ViewEncapsulation.None,
  template: require('./dataTables.html')
})
export class DataTables implements OnInit{
  currentUser: User;
  users: User[] = [];
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

  constructor(protected service: DataTablesService, private userService: UserService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
  ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
