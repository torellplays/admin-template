import {Component, ElementRef, HostListener, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {Router, Routes, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

import { BaMenuService } from '../../services';
import {GlobalState} from '../../../global.state';

import {layoutSizes} from '../../../theme';

@Component({
  selector: 'ba-sidebar',
  // styles: [require('./baSidebar.scss')],
  template: require('./baSidebar.html')
})
export class BaSidebar {

@Input() menuItem:any;
@Input() child:boolean = false;

@Output() itemHover = new EventEmitter<any>();
@Output() tggleSubMenu = new EventEmitter<any>();

public onHoverItem($event):void {
  this.itemHover.emit($event);
}

public onToggleSubMenu($event, item):boolean {
  $event.item = item;
  this.tggleSubMenu.emit($event);
  return false;
}



  @Input() sidebarCollapsed:boolean = false;
  @Input() menuHeight:number;

  @Output() expandMenu = new EventEmitter<any>();



  public menuItems: any[];
  protected _menuItemsSub: Subscription;
  public showHoverElem:boolean;
  public hoverElemHeight:number;
  public hoverElemTop:number;
  protected _onRouteChange:Subscription;
  public outOfArea:number = -200;

  constructor(private _router:Router, private _service:BaMenuService, private _state:GlobalState) {
    this._onRouteChange = this._router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });

    this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
  }

  public updateMenu(newMenuItems) {
    this.menuItems = newMenuItems;
    this.selectMenuAndNotify();
  }

  public selectMenuAndNotify():void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }

  public ngOnInit():void {
  }

  public ngOnDestroy():void {
    this._onRouteChange.unsubscribe();
    this._menuItemsSub.unsubscribe();
  }

  public hoverItem($event):void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  public toggleSubMenu($event):boolean {
    var submenu = jQuery($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
