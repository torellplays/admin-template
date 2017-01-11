import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-main-header',
  encapsulation: ViewEncapsulation.None,
  template: require('./main-header.component.html')
})

export class MainHeaderComponent {

messagesMenu = 'messages-menu';
isDropdown = true;
isMessagesMenu = true;
isOpen = true;

setClasses() {
let classes =  {
  dropdown: this.isDropdown,
  messagesMenu: this.isMessagesMenu,
  open: !this.isOpen,
};
return classes;
}
}
